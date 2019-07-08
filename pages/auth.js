import React, { Component } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Layout from '../components/Layout';
import { log } from 'util';

const _URL = 'http://10.58.4.202:8000/user';

class Auth extends Component {

  state = {
    user_id: '',
    password: '',
    id: '',
    pw: '',
    name: '',
    email: '',
    profile: ''
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name] : e.target.value.trim()
    })
  }

  handleSignup = async () => {

    const newUser = {
      user_id: this.state.id,
      password: this.state.pw,
      email: this.state.email,
      name: this.state.name,
      profile: this.state.profile
    }

    const res = await fetch(`${_URL}/account`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    });

    // 중복된 이메일 or 아이디일 경우
    if(res.status >= 400) {
      const result = await res.json();
      alert(result.message);
      return;
    }
    // 정상적인 경우
    else {
      const result = await res.json();
      let message = result.message + '\n 서비스를 사용하시려면 다시 로그인 해 주세요.'

      alert(message);
      window.location.href = '/auth'
    }
  }

  handleLogin = () => {

    const { user_id, password } = this.state;

    const user = {
      user_id,
      password
    }

    fetch(`${_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(res => {
      sessionStorage.setItem('access_token', res.access_token);
      Router.push('/');
    });
  }

  render () {
    const { id, email, name, profile, user_id } = this.state;

    return (
      <Layout>
        <Wrapper>
          <Login 
            user_id={user_id}
            onChange={this.handleInput}
            onClick={this.handleLogin}
          />
          <Signup 
            id={id}
            email={email}
            name={name}
            profile={profile}
            onChange={this.handleInput}
            onClick={this.handleSignup}
          />
        </Wrapper>
      </Layout>
    )
  }
}

const Wrapper = styled.div`
  width: 940px;

  box-sizing: border-box;
  margin: 0 auto;
  padding-top: 90px;
  &::after {
    display: block;
    content: '';
    clear: both;
  }

  @media only screen and (max-width: 920px) {
    min-width: 590px;
    width: 100%;
  }
`

export default Auth;
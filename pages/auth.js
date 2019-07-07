import React, { Component } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Layout from '../components/Layout';

class Auth extends Component {

  state = {
    loginId: '',
    loginPw: '',
    id: '',
    pw: '',
    name: '',
    email: '',
    profile: ''
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSignup = () => {

    const newUser = {
      user_id: this.state.id,
      password: this.state.pw,
      email: this.state.email,
      name: this.state.name,
      profile: this.state.profile
    }

    fetch('http://10.58.6.124:8000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
    .then(res => res.json())
    .then(res => {
      alert(res.message);
      Router.push('/auth');
    });
  }

  handleLogin = () => {

    const { loginId, loginPw } = this.state;

    const user = {
      loginId,
      loginPw
    }

    fetch('http://10.58.6.124:8000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(res => {
      alert(res.message);
      Router.push('/index');
    });
  }

  render () {
    const { id, email, name, profile, loginId } = this.state;

    return (
      <Layout>
        <Wrapper>
          <Login 
            loginId={loginId}
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
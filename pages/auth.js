import React, { Component } from 'react';
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

  render () {
    const { id, email, name, profile, loginId } = this.state;

    return (
      <Layout>
        <Wrapper>
          <Login 
            loginId={loginId}
            handleInput={this.handleInput}
          />
          <Signup 
            id={id}
            email={email}
            name={name}
            profile={profile}
            handleInput={this.handleInput}
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
  &::after {
    display: block;
    content: '';
    clear: both;
  }
`

export default Auth;
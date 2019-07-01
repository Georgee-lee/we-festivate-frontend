import React, { Component } from 'react';
import styled from 'styled-components';
import { LoginButton } from '../../components/Button'
import { SubmitButton } from '../../components/Button'
import Input from '../../components/Input';


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
    const { id } = this.state;

    return (
      <Wrapper>
        {/* Left Div */}
        <Leftbox>
          <h2>Google Login</h2>
          <p style={{ marginBottom: 50 }}>구글로 간편 로그인</p>
          <LoginButton />

          <Loginbox>
            <p style={{ fontSize: 15, margin: 0 }}>Id *</p>
            <Input
              value={id}
              name='id'
              type='text'
              placeholder='Enter your id'
              onChange={this.handleInput}
            />

            <p style={{ fontSize: 15, margin: 0 }}>Password *</p>
            <Input
              name='pw'
              type='password'
              placeholder='Enter your password'
              onChange={this.handleInput}
            />

            <SubmitButton />
          </Loginbox>
        </Leftbox>
        {/* Right Div */}
        <Rightbox>

        </Rightbox>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  width: 940px;
  height: 700px;

  box-sizing: border-box;
  margin: 0 auto;
`

const Leftbox = styled.div`
  float: left;
  width: 50%;
  height: 100%;

  box-sizing: border-box;
  padding: 20px;
`

const Rightbox = styled.div`
  float: right;
  width: 50%;
  height: 100%;
`

const Loginbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default Auth;
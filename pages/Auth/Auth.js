import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignature, faAddressCard, faUserEdit, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { GoogleLoginButton } from '../../components/Button'
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
    const { id, pw, email, name, profile, loginId, loginPw } = this.state;

    return (
      <Wrapper>
        {/* 로그인 폼 */}
        <Leftbox>
          <LoginText>
            <p>WeFestivate 로그인</p>
          </LoginText>
          <LoginWrap>
          <FontAwesomeIcon icon={faUserEdit} size="2x" style={{ position: "absolute", top: '26%', left: 3 }}/>
            <Input
              type='text'
              value={loginId}
              name='loginId'
              placeholder='Enter your id'
              onChange={this.handleInput}
            />
            <FontAwesomeIcon icon={faLock} size="2x" style={{ position: "absolute", top: '64%', left: 3 }} />
            <Input
              type='password'
              name='loginPw'
              placeholder='Enter your password'
              onChange={this.handleInput}
            />
          </LoginWrap>

          <LoginBtnbox>
            <LoginButton />
          </LoginBtnbox>

          <GoogleLoginButton />
        </Leftbox>

        {/* 회원가입 폼 */}
        <Rightbox>
          <LoginText>
            <p>WeFestivate 회원가입</p>
          </LoginText>
          <LoginWrap>
          <FontAwesomeIcon icon={faUserEdit} size="2x" style={{ position: "absolute", top: '10%', left: 3 }}/>
            <Input
              type='text'
              value={id}
              name='id'
              placeholder='Enter your id'
              onChange={this.handleInput}
            />
            <FontAwesomeIcon icon={faLock} size="2x" style={{ position: "absolute", top: '30%', left: 3 }} />
            <Input
              type='password'
              name='pw'
              placeholder='Enter your password'
              onChange={this.handleInput}
            />
            <FontAwesomeIcon icon={faEnvelope} size="2x" style={{ position: "absolute", top: '49%', left: 3 }}/>
            <Input
              type='email'
              value={email}
              name='email'
              placeholder='Enter your email'
              onChange={this.handleInput}
            />
            <FontAwesomeIcon icon={faSignature} size="2x" style={{ position: "absolute", top: '67%', left: 3 }}/>
            <Input
              type='text'
              value={name}
              name='name'
              placeholder='Enter your name'
              onChange={this.handleInput}
            />
            <FontAwesomeIcon icon={faAddressCard} size="2x" style={{ position: "absolute", top: '85%', left: 3 }}/>
            <Input
              type='text'
              value={profile}
              name='profile'
              placeholder='Enter your profile'
              onChange={this.handleInput}
            />
          </LoginWrap>

          <LoginBtnbox>
            <SubmitButton />
          </LoginBtnbox>

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
  margin: 0 auto;

  border-right: 1px dotted black;
`

const LoginText = styled.div`
  text-align: center;
  font-size: 25px;
  padding-bottom: 25px;
  border-bottom: 3px solid blue;
  margin: 0 auto;
`

const LoginWrap = styled.div`
  width: 100%;
  padding-top: 40px;
  position: relative;
`

const LoginBtnbox = styled.div`
  padding: 40px 0;
  border-bottom: 1px sotted black;
`


const Rightbox = styled.div`
  float: right;
  width: 50%;
  height: 100%;

  box-sizing: border-box;
  padding: 20px;
  margin: 0 auto;
`

const Loginbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-bottom: 20px;
`

export default Auth;
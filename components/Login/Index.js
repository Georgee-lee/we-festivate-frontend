import styled from 'styled-components';
import Input from '../Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserEdit, faLock } from '@fortawesome/free-solid-svg-icons'
import { GoogleLoginButton, LoginButton } from '../Button';

const Login = (props) => {
  return (
    <Leftbox>
      <LoginText>
        <p>WeFestivate 로그인</p>
      </LoginText>
      <LoginWrap>
      <FontAwesomeIcon icon={faUserEdit} size="2x" style={{ position: "absolute", top: '26%', left: 3 }}/>
        <Input
          type='text'
          value={props.loginId}
          name='loginId'
          placeholder='Enter your id'
          onChange={(e) => props.handleInput(e)}
        />
        <FontAwesomeIcon icon={faLock} size="2x" style={{ position: "absolute", top: '64%', left: 3 }} />
        <Input
          type='password'
          name='loginPw'
          placeholder='Enter your password'
          onChange={(e) => props.handleInput(e)}
        />
      </LoginWrap>

      <LoginBtnbox>
        <LoginButton />
      </LoginBtnbox>

      <GoogleLoginButton />
    </Leftbox>
  )
}


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

export default Login;
export { LoginText, LoginWrap, LoginBtnbox}
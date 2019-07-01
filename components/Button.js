import styled from 'styled-components';

export const LoginButton = (props) => {
  return (
    <LoginBtn 
      type='button'
      onClick={props.onClick}
    >
      Login with Google
    </LoginBtn>
  )
}

export const SubmitButton = (props) => {
  return (
    <SubmitBtn
      type='button'
      onClick={props.onClick}
    >
      Login
    </SubmitBtn>
  )
}

const LoginBtn = styled.button`
  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;
  margin: 0.2em;
  padding: 0 15px 0 46px;
  border: none;
  outline: none;
  line-height: 34px;
  border-radius: 0.2em;
  font-size: 16px;
  color: #FFF;
  background-color: #DD4B39;
  display: block;
  margin-bottom: 40px;
`

const SubmitBtn = styled.button`
  width: 70px;
  height: 40px;
  background-color: #32CD32;
  color: white;

  outline: none;
`
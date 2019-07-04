import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export const GoogleLoginButton = (props) => {
  return (
    <GoogleLoginBtn 
      type='button'
      onClick={props.onClick}
    >
      Login with Google
    </GoogleLoginBtn>
  )
}

export const LoginButton = (props) => {
  return (
    <NormalLoginButton 
      type='button'
      onClick={props.onClick}
    >
      Login
    </NormalLoginButton>
  )
}

export const SubmitButton = (props) => {
  return (
    <SubmitBtn
      type='button'
      onClick={props.onClick}
    >
      회원가입
    </SubmitBtn>
  )
}

export const SearchButton = (props) => {
  return (
    <SearchBtn
        type='button'
        onClick={props.onClick}
    >
      Search
      <FontAwesomeIcon icon={faSearch} style={{ paddingLeft: 10 }}/>
    </SearchBtn>
  )
}

export const PostSearchButton = (props) => {
  return (
    <PostSearchBtn
      type='button'
      onClick={props.onClick}
    >
      Search
      <FontAwesomeIcon icon={faSearch} style={{ paddingLeft: 10 }}/>
    </PostSearchBtn>
  )
}

const GoogleLoginBtn = styled.button`
  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;
  margin: 0.2em;
  padding: 0 15px 0 46px;
  width: 100%;
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

const NormalLoginButton = styled.button`
  width: 100%;
  height: 50px;
  font-size: 15px;

  color: white;
  background-color: blue;

  outline: none;
`

const SubmitBtn = styled.button`
  width: 100%;
  height: 40px;
  background-color: #32CD32;
  color: white;
  outline: none;
`
const SearchBtn = styled.button`
  width: 100%;
  height: 45px;
  border: none;
  background-color: #59c45b;
  color: white;
  font-size: 17px;
  outline: none;
`

const PostSearchBtn = styled.button`
  width: 120px;
  height: 51px;
  border: none;

  margin-left: 20px;

  background-color: #59c45b;
  color: white;
  font-size: 17px;
  outline: none;

  position: absolute;
  top: 12px;
`
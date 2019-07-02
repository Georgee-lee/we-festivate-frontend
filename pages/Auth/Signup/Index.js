import styled from 'styled-components';
import Input from '../../../components/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignature, faAddressCard, faUserEdit, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { SubmitButton } from '../../../components/Button'
import { LoginText, LoginWrap, LoginBtnbox } from '../Login';

const Signup = (props) => {
  return (
    <Rightbox>
      <LoginText>
        <p>WeFestivate 회원가입</p>
      </LoginText>
      <LoginWrap>
      <FontAwesomeIcon icon={faUserEdit} size="2x" style={{ position: "absolute", top: '10%', left: 3 }}/>
      <Input
        type='text'
        value={props.id}
        name='id'
        placeholder='Enter your id'
        onChange={props.handleInput}
      />
      <FontAwesomeIcon icon={faLock} size="2x" style={{ position: "absolute", top: '30%', left: 3 }} />
      <Input
        type='password'
        name='pw'
        placeholder='Enter your password'
        onChange={props.handleInput}
      />
      <FontAwesomeIcon icon={faEnvelope} size="2x" style={{ position: "absolute", top: '49%', left: 3 }}/>
      <Input
        type='email'
        value={props.email}
        name='email'
        placeholder='Enter your email'
        onChange={props.handleInput}
      />
      <FontAwesomeIcon icon={faSignature} size="2x" style={{ position: "absolute", top: '67%', left: 3 }}/>
      <Input
        type='text'
        value={props.name}
        name='name'
        placeholder='Enter your name'
        onChange={props.handleInput}
      />
      <FontAwesomeIcon icon={faAddressCard} size="2x" style={{ position: "absolute", top: '85%', left: 3 }}/>
      <Input
        type='text'
        value={props.profile}
        name='profile'
        placeholder='Enter your profile'
        onChange={props.handleInput}
      />
      </LoginWrap>

      <LoginBtnbox>
        <SubmitButton />
      </LoginBtnbox>

    </Rightbox>
  )
}

export default Signup;

const Rightbox = styled.div`
  float: right;
  width: 50%;
  height: 100%;

  box-sizing: border-box;
  padding: 20px;
  margin: 0 auto;
`
/* eslint-disable react/react-in-jsx-scope */
import styled from "styled-components";
import GoogleLogin from "react-google-login";
import { UserInput } from "../Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit, faLock } from "@fortawesome/free-solid-svg-icons";
import { GoogleLoginButton, LoginButton } from "../Button";

const KAKAO_KEY = "f800696839cb279f7fa590b7a1406a95";

class Login extends React.Component {
  componentDidMount() {
    Kakao.init(KAKAO_KEY);
    // 카카오 로그인 버튼을 생성합니다.
    Kakao.Auth.createLoginButton({
      container: "#kakao-login-btn",
      success: function(authObj) {
        alert(JSON.stringify(authObj));
      },
      fail: function(err) {
        alert(JSON.stringify(err));
      }
    });
  }

  responseGoogle = response => {
    console.log(response);
  };

  render() {
    return (
      <Leftbox>
        <LoginText>
          <p>WeFestivate 로그인</p>
        </LoginText>
        <LoginWrap>
          <FontAwesomeIcon
            icon={faUserEdit}
            size="2x"
            style={{ position: "absolute", top: "26%", left: 3 }}
          />
          <UserInput
            type="text"
            value={this.props.user_id}
            name="user_id"
            placeholder="Enter your id"
            onChange={e => this.props.onChange(e)}
          />
          <FontAwesomeIcon
            icon={faLock}
            size="2x"
            style={{ position: "absolute", top: "64%", left: 3 }}
          />
          <UserInput
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={e => this.props.onChange(e)}
          />
        </LoginWrap>

        <LoginBtnbox>
          <LoginButton onClick={this.props.onClick} />
        </LoginBtnbox>

        <GoogleLogin
          clientId="664534233678-0c0sfcouhhl4ha18ahl89eddhhb92k7t.apps.googleusercontent.com"
          buttonText="Login With Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
        <a id="kakao-login-btn"></a>
      </Leftbox>
    );
  }
}

const Leftbox = styled.div`
  float: left;
  width: 50%;
  height: 100%;

  box-sizing: border-box;
  padding: 20px;
  margin: 0 auto;

  border-right: 1px dotted black;

  #kakao-login-btn {
    width: 45%;
    margin-left: 20px;
    vertical-align: top;
  }

  @media only screen and (max-width: 920px) {
    float: none;
    border: none;
    border-bottom: 1px dotted black;
  }
`;

const LoginText = styled.div`
  text-align: center;
  font-size: 25px;
  padding-bottom: 25px;
  border-bottom: 3px solid gray;
  margin: 0 auto;
`;

const LoginWrap = styled.div`
  width: 100%;
  padding-top: 40px;
  position: relative;
`;

const LoginBtnbox = styled.div`
  padding: 40px 0;
  border-bottom: 1px sotted black;
`;

export default Login;
export { LoginText, LoginWrap, LoginBtnbox };

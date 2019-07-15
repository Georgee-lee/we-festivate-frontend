/* eslint-disable react/react-in-jsx-scope */
import styled from "styled-components";
import GoogleLogin from "react-google-login";
import Router from "next/router";
import { UserInput } from "../Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit, faLock } from "@fortawesome/free-solid-svg-icons";
import { LoginButton } from "../Button";
import { KAKAO_KEY } from "../../config/constants";
import { _URL } from "../../config/constants";

class Login extends React.Component {
  componentDidMount() {
    // init은 한 번만 하면 되기에 체크한 후 안되어있으면 실행!
    if (!window.Kakao.Link) {
      Kakao.init(KAKAO_KEY);
    }
    // 카카오 로그인 버튼을 생성합니다.
    Kakao.Auth.createLoginButton({
      container: "#kakao-login-btn",
      success: async authObj => {
        const token = authObj["access_token"];

        const response = await fetch(`${_URL}/user/login/kakao`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token
          }
        });

        if (response.status >= 400) {
          alert("로그인 실패");
          return;
        }

        const result = await response.json();

        if (result.message !== "ERROR") {
          sessionStorage.setItem("access_token", result.access_token);
          sessionStorage.setItem("user_name", result.user_name);
          sessionStorage.setItem("user_pk", result.user_pk);
          alert("환영합니다, " + result.user_name + "님");
          Router.back();
        } else {
          alert("로그인 실패");
        }
      },
      fail: function(err) {
        console.log(JSON.stringify(err));
      }
    });
  }

  responseGoogle = async res => {
    const token = res.Zi["id_token"];

    const response = await fetch(`${_URL}/user/login/google`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      }
    });

    if (response.status >= 400) {
      alert("로그인 실패");
      return;
    }

    const result = await response.json();

    if (result.message !== "ERROR") {
      sessionStorage.setItem("access_token", result.access_token);
      sessionStorage.setItem("user_name", result.user_name);
      sessionStorage.setItem("user_pk", result.user_pk);
      alert("환영합니다, " + result.user_name + "님");
      Router.back();
    } else {
      alert("로그인 실패");
    }
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
          className="google"
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
    width: 100%;
    max-width: 500px;
    float: none;
    border: none;
    border-bottom: 1px dotted black;
  }

  @media only screen and (max-width: 849px) {
    #kakao-login-btn {
      width: 100%;
      height: 85%;
      margin-left: 0;
    }
    .google {
      width: 100%;
      margin-bottom: 20px;
    }
    .google span {
      width: 100%;
      font-size: 19px;
    }
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

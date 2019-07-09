import styled from "styled-components";
import fetch from "isomorphic-unfetch";
import Link from "next/link";

const _URL = "http://10.58.4.202:8000/user/info";

export default class Header extends React.Component {
  state = {
    isLogin: true,
    user_type: 3
  };

  componentDidMount = async () => {
    const token = sessionStorage.getItem("access_token");

    if (token) {
      // const res = await fetch(`${_URL}`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify(token)
      // }); // TOKEN을 주고 유저의 등급을 얻어와야 한다.

      // const data = await res.json();
      // const user_type = data.user_type_id

      this.setState({
        isLogin: true
        // user_type
      });
    }
  };

  handleLogout = () => {
    sessionStorage.removeItem("access_token");
    alert("로그아웃 되었습니다");

    this.setState({
      isLogin: false
    });
  };

  render() {
    const { isLogin, user_type } = this.state;

    return (
      <Wrapper>
        <GlobalMenu>
          <Link href="/postlist">
            <p
              style={{
                display: "inline-block",
                paddingRight: 15,
                borderRight: "2px solid red",
                cursor: "pointer"
              }}
            >
              All Events
            </p>
          </Link>

          {isLogin ? (
            <>
              <p
                style={{
                  display: "inline-block",
                  paddingLeft: 15,
                  cursor: "pointer"
                }}
                onClick={this.handleLogout}
              >
                Logout
              </p>

              {user_type !== 3 ? (
                <Link href="/mypage">
                  <p
                    style={{
                      display: "inline-block",
                      paddingLeft: 15,
                      cursor: "pointer"
                    }}
                  >
                    MyPage
                  </p>
                </Link>
              ) : (
                <Link href="/admin">
                  <p
                    style={{
                      display: "inline-block",
                      paddingLeft: 15,
                      cursor: "pointer"
                    }}
                  >
                    Manage
                  </p>
                </Link>
              )}
            </>
          ) : (
            <Link href="/auth">
              <p
                style={{
                  display: "inline-block",
                  paddingLeft: 15,
                  cursor: "pointer"
                }}
              >
                Login & Signup
              </p>
            </Link>
          )}
        </GlobalMenu>
        <MenuBox>
          <Link href="/">
            <LogoBox />
          </Link>
        </MenuBox>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: black;
  z-index: 10;

  p {
    margin: 0;
  }
`;

const GlobalMenu = styled.div`
  height: 25px;
  text-align: right;
  color: white;
  font-weight: bold;
  margin: 7px 14.5% 0 0;
`;

const MenuBox = styled.div`
  height: 50px;
  background-color: white;
  box-shadow: 0 3px 2px -2px gray;

  &::after {
    display: block;
    content: "";
    clear: both;
  }
`;

const LogoBox = styled.div`
  display: block;
  width: 190px;
  height: 45px;
  margin-left: 14.5%;
  cursor: pointer;
  background: url("../../static/Logo_B.png");
  background-size: cover;
  background-position: center;
`;

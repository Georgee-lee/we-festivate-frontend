import styled from 'styled-components';
import Link from 'next/link';

export default class Header extends React.Component {

  state = {
    isLogin: false
  }

  componentDidMount() {
    const token = sessionStorage.getItem('token');

    if(token) {
      this.setState({
        isLogin: true
      })
    } 
  }

  handleLogout = () => {
    sessionStorage.removeItem('token');
    alert('로그아웃 되었습니다');
    
    this.setState({
      isLogin: false
    })
  }

  render() {

    const { isLogin } = this.state;

    return (
      <Wrapper>
        <GlobalMenu>
          <Link href='/postList'>
            <p style={{ display: 'inline-block', paddingRight: 15, borderRight: '2px solid red', cursor: 'pointer' }}>All Events</p>
          </Link>
  
          {
            isLogin ? 
            <>
            <p style={{ display: 'inline-block', paddingLeft: 15, cursor: 'pointer'}} onClick={this.handleLogout}>Logout</p>
            <Link href='/mypage'><p style={{ display: 'inline-block', paddingLeft: 15, cursor: 'pointer'}}>MyPage</p></Link>
            </>
            :
            <Link href='/auth'><p style={{ display: 'inline-block', paddingLeft: 15, cursor: 'pointer'}}>Login & Signup</p></Link>
          }
        </GlobalMenu>
        <MenuBox>
          <Link href='/'>
            <LogoBox />
          </Link>
        </MenuBox>
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  width: 100%;
  height: 30px;
  position: fixed;
  background-color: black;
  z-index: 10;
`

const GlobalMenu = styled.div`
  text-align: right;
  color: white;
  font-weight: bold;
  margin: -9px 14.5% 0 0;
  box-sizing: border-box;
`

const MenuBox = styled.div`
  position: fixed;
  top: 10px;
  right: 0;
  left: 0;
  height: 50px;
  margin-top: 20px;
  background-color: white;
  box-shadow: 0 3px 2px -2px gray;
  &::after {
    display: block;
    content: '';
    clear: both;
  }
`

const LogoBox = styled.div`
  display: block;
  width: 190px;
  height: 45px;
  margin-left: 14.5%;
  cursor: pointer;
  background: url('../../static/Logo_B.png');
  background-size: cover;
  background-position: center;
`

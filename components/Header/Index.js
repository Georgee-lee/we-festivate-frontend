import styled from 'styled-components';
import Link from 'next/link';

const Header = () => {
  return (
    <Wrapper>
      <MenuBox>
        <LogoBox url='../../static/We_logo.png'/>
        <Ul>
          <Link href='/postlist'>
            <Li>전체 행사보기</Li>
          </Link>
          <Link href='/auth'>
            <Li>Login & Signup</Li>
          </Link>
        </Ul>
      </MenuBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 75px;
  position: fixed;
  background-color: white;
  z-index: 10;
`

const MenuBox = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  &::after {
    display: block;
    content: '';
    clear: both;
  }
`

const LogoBox = styled.div`
  display: inline-block;
  width: 200px;
  height: 80px;
  margin: -5px 0 0 20px;
  background: url(${props => props.url}) no-repeat;
  background-size: cover;
`

const Ul = styled.ul`
  float: right;
  margin-top: 7px;

  color: black;
  font-size: 17px;
  font-weight: 700;
`

const Li = styled.li`
  display: inline-block;
  margin: 25px;
  cursor: pointer;
`

export default Header;
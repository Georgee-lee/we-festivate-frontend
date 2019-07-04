import styled from 'styled-components';
import Link from 'next/link';

const Footer = () => {
  return (
    <Wrapper>
      <LeftBox>
        <Link href='/'>
          <a>
            <img src='../../static/Logo_W.png' alt='Logo' style={{ display: 'block', margin: '50px 135px' }}/>
          </a>
        </Link>
      </LeftBox>
      <RightBox>

      </RightBox>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  width: 100%;
  height: 250px;

  background-color: black;
`

const LeftBox = styled.div`
  float: left;
  width: 30%;
  height: 100%;
`

const RightBox = styled.div`
  float: right;
  width: 70%;
  height: 100%;
`

export default Footer;
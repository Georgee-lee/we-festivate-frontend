import styled from 'styled-components';
import Link from 'next/link';

const Footer = () => {
  return (
    <Wrapper>
      <LeftBox>
        <Link href='/'>
          <a>
            <img src='../../static/Logo_W.png' alt='Logo' style={{ display: 'inline-block', margin: '50px 135px' }}/>
          </a>
        </Link>
      </LeftBox>
      <RightBox>
        <TextBox>
          <span>상호명: WeFestivate | 대표: 링고 &nbsp;&nbsp;| 전체페이지관리자: 이건모</span> <br />
          <span></span> 위코드등록번호: 20190610 | 모든 건 내 마음대로 <br />
          <span></span> 주소: 서울특별시 강남구 테헤란로 427, 위워크타워  | 전화: 010-1234-5678 (영업일 10:00~18:00)
          <br /><br />
          <span>© 2019 WeFestivate, All rights reserved</span>
        </TextBox>
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

const TextBox = styled.div`
  box-sizing: border-box;
  width: 80%;
  height: 70%;
  padding: 50px 0 0 0;
  color: #9e9e9e;
  line-height: 28px;
`

export default Footer;
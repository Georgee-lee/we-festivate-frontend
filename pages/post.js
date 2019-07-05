import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import DummyList from '../static/DummyList';
import { Box } from './index';
import Map from '../components/Map';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'

class Post extends React.Component {
  render() {
    const BG_IMG = "https://en.trippose.com/img/bg/bokeh-514948_1920.jpg";

    const postID = this.props.url.query.id;
    const post = DummyList[postID];

    return (
      <Layout>
        <PostBox image={BG_IMG} />
        <DetailBox>
          <PostWrap>
            {/* 이미지와 제목 일시 있는 곳 */}
            {/* 날짜를 YYYY MM DD 로 줄 수 있는지??? */}
            <PostHeader>
              <ImageBox />
              <TitleBox>
                <TitleHead>
                  <h2 style={{ fontSize: 30, margin: 0 }}>{post.title}</h2>
                  <p style={{ color: 'gray', fontSize: 20, marginTop: 5 }}>at {post.building_name}</p>
                  <br />
                  <p style={{ fontWeight: 'bold', marginBottom:20 }}>일시</p>
                  <p style={{ margin: '0 0 5px 0' }}>2019년 07월 24일 (수)</p> 
                  <p style={{ margin: 0 }}>오후 07:00 - 오후 09:00</p>
                </TitleHead>
              </TitleBox>
            </PostHeader>

            {/* 인원수와 신청 버튼 있는 곳 */}
            <InfoBox>
              <span style={{ display: 'inline-block', padding: 15 }}>
                <FontAwesomeIcon icon={faUsers} style={{ width: '1em', height: '1em' }}/>&nbsp;&nbsp; {post.max_rsvp}명
              </span>
            <JoinBtn>
              참여하기
            </JoinBtn>
            </InfoBox>
            {/* 본문이 위치한 곳 */}
            어쩌구저쩌구 으어어어어아아아아ㅏ아으으ㅏ으ㅏ으ㅏ으아ㅡ아
            {/* 지도가 위치한 곳 */}
            <Map />
          </PostWrap>
        </DetailBox>
        
      </Layout>
    )
  }
}

const PostBox = styled(Box)`
  height: 350px;

  background: url(${props => props.image}) no-repeat;
  background-position: bottom;
  background-size: cover;
`

const DetailBox = styled.div`
  width: 80%;
  margin: -12% auto 15px;
  position: relative;
  box-sizing: border-box;
  background-color: white;
  border-radius: 25px;
`

const PostWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 0 0 40px;
`

const PostHeader = styled.div`
  width: 95%;
  height: 400px;
  border-bottom: 1px solid gray;

  :after {
    clear: both;
    display: block;
    content: '';
  }
`

const ImageBox = styled.div`
  min-width: 520px;
  max-width: 800px;
  width: 60%;
  height: 380px;
  display: inline-block;
  float: left;
  background-image: url(https://en.trippose.com/img/bg/bokeh-514948_1920.jpg);
  background-position: center;
`

const TitleBox = styled.div`
  width: 35%;
  height: 350px;
  display: inline-block;
  margin-left: 40px;
`

const TitleHead = styled.div`
  width: 90%;
  padding: 25px;
`

const InfoBox = styled.div`
  width: 95%;
  height: 70px;
  margin: 20px 0;
  border-bottom: 1px solid gray;
`

const JoinBtn = styled.button`
  width: 150px;
  height: 51px;
  border: 1px solid green;
  border-radius: 10px;
  background-color: green;
  color: white;
  font-size: 17px;
  outline: none;

  float: right;
`

export default Post;
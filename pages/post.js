import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import { Box } from './index';
import Map from '../components/Map';
import { changeDateForm } from '../helper/changeDateForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'

const _URL = 'http://10.58.4.202:8000/event/detail/';

class Post extends React.Component {

  static async getInitialProps({ query }) {
    const postId = query.id;

    try {
      const res = await fetch(`${_URL}${postId}`);
  
      if (res.status >= 400) {
        throw new Error('Failed to fetch data');
      }

      const data = await res.json();

      return { data }
    } catch (e) {
      console.log(e);
    }
  }

  state = {
    post: {}
  }

  render() {
    const BG_IMG = "https://en.trippose.com/img/bg/bokeh-514948_1920.jpg";
    const { data } = this.props;
    
    const date = changeDateForm(data.date);

    return (
      <Layout>
        <PostBox image={BG_IMG} />
        <DetailBox>
          <PostWrap>
            <PostHeader>
              <ImageBox url={data.photo_url}/>
              <TitleBox>
                <TitleHead>
                  <h2 style={{ fontSize: 30, margin: 0 }}>{data.title}</h2>
                  <p style={{ color: 'gray', fontSize: 20, marginTop: 5 }}>at {data.building} &nbsp; {data.place}</p>
                  <br /><br /><br />
                  <p style={{ fontWeight: 'bold', marginBottom:20 }}>일시</p>
                  <p style={{ margin: '0 0 5px 0' }}>{date}</p> 
                  <p style={{ margin: 0 }}>{data.start_time} ~ {data.end_time}</p>
                </TitleHead>
              </TitleBox>
            </PostHeader>

            {/* 인원수와 신청 버튼 있는 곳 */}
            <InfoBox>
              <span style={{ display: 'inline-block', padding: 15 }}>
                <FontAwesomeIcon icon={faUsers} style={{ width: '1em', height: '1em' }}/>&nbsp;&nbsp; {data.current_rsvp}명 /&nbsp; { data.max_rsvp > 0 ? data.max_rsvp+'명' : '제한없음' }
              </span>
            <JoinBtn>
              RSVP
            </JoinBtn>
            </InfoBox>
            {/* 본문이 위치한 곳 */}
            <div style={{ whiteSpace: 'pre-wrap', width: '65%' }}>{data.main_text}</div>
            {/* 지도가 위치한 곳 */}
            <Map lat={data.latitude} lng={data.longitude} />
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
  background: url(${props => props.url}) no-repeat center;
  background-size: cover;
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
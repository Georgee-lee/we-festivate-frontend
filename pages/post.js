import styled from "styled-components";
import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import CommentList from "../components/Comments/CommentList";
import CommentWrite from "../components/Comments/CommentWrite";
import { Box } from "./index";
import Map from "../components/Map";
import { changeDateForm } from "../helper/changeDateForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

const _URL = "http://10.58.4.202:8000/event/detail/";

class Post extends React.Component {
  // static async getInitialProps({ query }) {
  //   const postId = query.id;

  //   try {
  //     const res = await fetch(`${_URL}${postId}`);

  //     if (res.status >= 400) {
  //       throw new Error('Failed to fetch data');
  //     }

  //     const data = await res.json();

  //     return { postId, data }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  state = {
    post: {
      event_id: 11,
      title: "TGIM | 네이처벨리 그래놀라바\n",
      building: "Hongdae",
      place: "4F lounge",
      date: "190812",
      start_time: "10:00PM",
      end_time: "10:30PM",
      max_rsvp: 0,
      current_rsvp: 3,
      event_page_url: "https://members.wework.com/events/tgim-240575",
      main_text:
        "네이처벨리 그래놀라바와 함께하는 TGIM\n\n월요병 가득한 바쁜 아침, 간편하면서도 건강한 한 끼를 원하시나요?\n100% 통곡물을 오븐에 구워 섬유질이 가득~\n바삭바삭한 식감으로 든든한 포만감을 줄 수 있는 세계1위 원조 그래놀라바 네이처벨리로 한 주를 시작해 보세요!\n\n캐나다 메이플 시럽의 풍부한 달콤함을 느끼고 싶다면 네이처벨리 메이플시럽을!\n통귀리에 더해진 사과의 달콤함을 느끼고 싶다면 애플크런치를!\n\n네이처벨리를 더욱 맛있게 먹고 싶다면?!\n우유나 커피와 함께 곁들여 먹어보세요! 더욱 맛있게 즐길 수 있으실 거예요\n\n#네이처벨리 #원조그래놀라바\n\n* 신청 방법 : WeWork App이나 웹페이지를 통해 RSVP 버튼을 꾹- 누른신후 보여주세요. RSVP 버튼을 눌러주셔야 수령 가능합니다\n** 선착순으로 진행되며, 조기 소진될 수 있습니다. ",
      create_at: "2019-07-05T00:00:00Z",
      updated_at: "2019-07-05T00:00:00Z",
      event_host_id: 1,
      photo_url:
        "https://res-5.cloudinary.com/wework/image/upload/c_fill,h_460,w_460/v1562054159/production/event/photo/bd990c43-28d2-4a15-9167-16061c480d09.jpg",
      contact: "02-1234-1;1234",
      address: "서울 종로구 종로 51",
      latitude: "37.556247",
      longitude: "126.922061"
    }
  };

  render() {
    const BG_IMG = "https://en.trippose.com/img/bg/bokeh-514948_1920.jpg";
    // const { postId, data } = this.props;
    // const date = changeDateForm(data.date);
    const { post } = this.state;

    return (
      <Layout>
        <PostBox image={BG_IMG} />
        <DetailBox>
          <PostWrap>
            <PostHeader>
              <ImageBox url={post.photo_url} />
              <TitleBox>
                <TitleHead>
                  <h2 style={{ fontSize: 30, margin: 0 }}>{post.title}</h2>
                  <p style={{ color: "gray", fontSize: 20, marginTop: 5 }}>
                    at {post.building} &nbsp; {post.place}
                  </p>
                  <br />
                  <br />
                  <br />
                  <p style={{ fontWeight: "bold", marginBottom: 20 }}>일시</p>
                  <p style={{ margin: "0 0 5px 0" }}>{post.date}</p>
                  <p style={{ margin: 0 }}>
                    {post.start_time} ~ {post.end_time}
                  </p>
                </TitleHead>
              </TitleBox>
            </PostHeader>

            {/* 인원수와 신청 버튼 있는 곳 */}
            <InfoBox>
              <span style={{ display: "inline-block", padding: 15 }}>
                <FontAwesomeIcon icon={faUsers} />
                &nbsp;&nbsp; {post.current_rsvp}명 /&nbsp;{" "}
                {post.max_rsvp > 0 ? post.max_rsvp + "명" : "제한없음"}
              </span>
              <JoinBtn>RSVP</JoinBtn>
              <ShareBtn>SNS에 공유</ShareBtn>
            </InfoBox>
            {/* 본문이 위치한 곳 */}
            <div style={{ whiteSpace: "pre-wrap", width: "65%" }}>
              {post.main_text}
            </div>
            {/* 지도가 위치한 곳 */}
            <Map lat={post.latitude} lng={post.longitude} />
            <br />
            <br />
            <h2>Comments(0)</h2>
            {/* 댓글 등록되면 나오는 곳 */}
            {post.comments ? (
              <CommentList List={post.comments} />
            ) : (
              <div style={{ width: "90%", height: 150 }}>
                <hr />
              </div>
            )}
            {/* 댓글 작성하는 곳 */}
            <h2 style={{ marginBottom: 10 }}>Comment</h2>
            <CommentWrite postId="11" />
          </PostWrap>
        </DetailBox>
      </Layout>
    );
  }
}

const PostBox = styled(Box)`
  height: 350px;

  background: url(${props => props.image}) no-repeat;
  background-position: bottom;
  background-size: cover;
`;

const DetailBox = styled.div`
  width: 80%;
  margin: -12% auto 15px;
  position: relative;
  box-sizing: border-box;
  background-color: white;
  border-radius: 25px;
`;

const PostWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 0 0 40px;
`;

const PostHeader = styled.div`
  width: 95%;
  height: 400px;
  border-bottom: 1px solid gray;

  :after {
    clear: both;
    display: block;
    content: "";
  }
`;

const ImageBox = styled.div`
  min-width: 520px;
  max-width: 800px;
  width: 60%;
  height: 380px;
  display: inline-block;
  float: left;
  background: url(${props => props.url}) no-repeat center;
  background-size: cover;
`;

const TitleBox = styled.div`
  width: 35%;
  height: 350px;
  display: inline-block;
  margin-left: 40px;
`;

const TitleHead = styled.div`
  width: 90%;
  padding: 25px;
`;

const InfoBox = styled.div`
  width: 95%;
  height: 70px;
  margin: 20px 0;
  border-bottom: 1px solid gray;
`;

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
`;

const ShareBtn = styled(JoinBtn)`
  background-color: yellow;
  color: black;
  border: 1px solid yellow;
  margin-right: 10px;
`;

export default Post;

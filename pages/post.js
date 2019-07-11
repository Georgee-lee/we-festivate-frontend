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
import { _URL } from "../config/constants";

class Post extends React.Component {
  static async getInitialProps({ query }) {
    const postId = query.id;
    const user_id = query.user_id;

    console.log(postId, user_id);

    const test = {
      user_id: user_id
    };

    try {
      const res = await fetch(`${_URL}/event/detail/${postId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(test)
      });

      if (res.status >= 400) {
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();

      return { postId, data };
    } catch (e) {
      console.log(e);
    }
  }

  state = {
    post: {}
  };

  render() {
    const BG_IMG = "https://en.trippose.com/img/bg/bokeh-514948_1920.jpg";
    const { postId, data } = this.props;
    const date = changeDateForm(data.date);

    return (
      <Layout>
        <PostBox image={BG_IMG} />
        <DetailBox>
          <PostWrap>
            <PostHeader>
              <ImageBox url={data.photo_url} />
              <TitleBox>
                <TitleHead>
                  <h2 style={{ fontSize: 30, margin: 0 }}>{data.title}</h2>
                  <p style={{ color: "gray", fontSize: 20, marginTop: 5 }}>
                    at {data.building} &nbsp; {data.place}
                  </p>
                  <br />
                  <p style={{ fontWeight: "bold", marginBottom: 20 }}>일시</p>
                  <p style={{ margin: "0 0 5px 0" }}>{date}</p>
                  <p style={{ margin: 0 }}>
                    {data.start_time} ~ {data.end_time}
                  </p>
                </TitleHead>
              </TitleBox>
            </PostHeader>

            {/* 인원수와 신청 버튼 있는 곳 */}
            <InfoBox>
              <InfoSpan>
                <FontAwesomeIcon icon={faUsers} />
                &nbsp;&nbsp; {data.current_rsvp}명 /&nbsp;{" "}
                {data.max_rsvp > 0 ? data.max_rsvp + "명" : "제한없음"}
              </InfoSpan>
              <JoinBtn className="rsvp">RSVP</JoinBtn>
              <ShareBtn className="share">SNS에 공유</ShareBtn>
            </InfoBox>
            {/* 본문이 위치한 곳 */}
            <InfoInner>{data.main_text}</InfoInner>
            {/* 지도가 위치한 곳 */}
            <Map lat={data.latitude} lng={data.longitude} />
            <br />
            <br />
            <h2>Comments(0)</h2>
            {/* 댓글 등록되면 나오는 곳 */}
            {data.comments ? (
              <CommentList List={data.comments} />
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

  @media only screen and (max-width: 1150px) {
    margin: -40% auto 15px;
  }
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

  @media only screen and (max-width: 1416px) {
    padding-bottom: 690px;
  }
`;

const ImageBox = styled.div`
  max-width: 635px;
  width: 100%;
  height: 380px;
  display: inline-block;
  float: left;
  background: url(${props => props.url}) no-repeat center;
  background-size: cover;
`;

const TitleBox = styled.div`
  width: 35%;
  max-width: 450px;
  min-width: 350px;
  height: 350px;
  display: inline-block;
  margin-left: 40px;

  @media only screen and (max-width: 1200px) {
    height: auto;
    width: auto;
    margin-left: unset;
  }
`;

const TitleHead = styled.div`
  width: 90%;
  padding: 25px;

  @media only screen and (max-width: 1150px) {
    width: 100%;
  }
`;

const InfoBox = styled.div`
  width: 95%;
  height: 70px;
  margin: 20px 0;
  border-bottom: 1px solid gray;

  ::after {
    display: block;
    content: "";
    clear: both;
  }

  @media only screen and (max-width: 1060px) {
    height: auto;
  }
`;

const InfoSpan = styled.div`
  display: inline-block;
  padding: 15;

  @media only screen and (max-width: 1060px) {
    display: block;
    margin: 10px;

    .rsvp {
      margin-right: 15px;
    }
  }
`;

const InfoInner = styled.div`
  width: 65%;
  white-space: pre-wrap;

  @media only screen and (max-width: 1150px) {
    width: auto;
  }
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

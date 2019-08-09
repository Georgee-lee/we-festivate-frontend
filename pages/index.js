import styled from "styled-components";
import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import { SearchInput } from "../components/Input";
import { SearchButton } from "../components/Button";
import PostList from "../components/PostList";
import PostLabelBar from "../components/PostLabelBar";
import { _URL } from "../config/constants";

class Index extends React.Component {
  state = {
    recommandPostList: [],
    latestPostList: [],
    title: ""
  };

  async componentDidMount() {
    try {
      const res = await fetch(`${_URL}/event/priority`); // 추천 리스트 8개
      const res2 = await fetch(`${_URL}/event/newest`); // 최신 리스트 8개

      if (res.status >= 400 || res2.status >= 400) {
        throw new Error("Failed to fetch data");
      }

      const list = await res.json();
      const list2 = await res2.json();

      this.setState({
        recommandPostList: list,
        latestPostList: list2
      });
    } catch (e) {
      console.log(e);
    }
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSearch = async e => {
    const { title } = this.state;
    window.location.href = `/postlist?query=${title}`;
  };

  render() {
    const { recommandPostList, latestPostList, title } = this.state;

    return (
      <Layout style={{ margin: 0, padding: 0 }}>
        <Box>
          <video muted autoPlay loop>
            <source src="../static/wework.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* 동영상 안에 있는 검색창 */}
          <SearchWrap>
            <SearchInnerWrap>
              <img src="../static/Logo_W.png" alt="logo" style={{ paddingBottom: 10 }} />
              <SearchBox>
                <SearchLeft>
                  <SearchInput value={title} onChange={this.handleInput} />
                </SearchLeft>
                <SearchRight>
                  <SearchButton onClick={this.handleSearch} />
                </SearchRight>
              </SearchBox>
            </SearchInnerWrap>
          </SearchWrap>
        </Box>

        <PostLabelBar title="추천 이벤트" subtitle="바로 참여 가능한 이벤트를 한눈에 보실 수 있습니다" />

        {recommandPostList.length > 0 ? (
          <div style={{ width: "75%", margin: "0 auto" }}>
            <PostList list={recommandPostList} />
          </div>
        ) : (
          <div style={{ width: "75%", height: "30%", margin: "30px auto" }}>
            <p>현재 등록된 이벤트가 없습니다.</p>
          </div>
        )}

        <PostLabelBar title="전체 이벤트" subtitle="등록된 이벤트 전체를 한눈에 보실 수 있습니다" />

        {latestPostList.length > 0 ? (
          <div style={{ width: "75%", margin: "0 auto" }}>
            <PostList list={latestPostList} />
          </div>
        ) : (
          <div style={{ width: "75%", height: "30%", margin: "30px auto" }}>현재 등록된 이벤트가 없습니다.</div>
        )}
      </Layout>
    );
  }
}

const Box = styled.div`
  margin-top: 82px;
  max-height: 550px;
  overflow: hidden;
  position: relative;

  video {
    width: 100%;
  }

  @media only screen and (max-width: 1150px) {
    height: 650px;

    video {
      width: auto;
    }
  }

  @media only screen and (min-width: 350px) and (max-width: 415px) {
    height: 450px;

    video {
      width: auto;
      height: 100%;
    }
  }
`;

const SearchWrap = styled.div`
  width: 90%;
  position: absolute;
  bottom: 15%;
  left: 5%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 350px) and (max-width: 415px) {
    width: 100%;
    left: 0;
  }
`;

const SearchInnerWrap = styled.div`
  width: 100%;
  max-width: 1100px;

  @media only screen and (min-width: 350px) and (max-width: 415px) {
    width: 100%;
    min-width: unset;
  }
`;

const SearchBox = styled.div`
  min-width: 320px;
  padding: 20px 0;
  position: relative;
  border-top: 4px solid #59c45a;
  background-color: rgba(255, 255, 255, 0.6);

  :before {
    position: absolute;
    top: -36%;
    left: 6%;
    content: "";
    border: 17px solid transparent;
    border-bottom-color: #59c45a;

    @media only screen and (max-width: 950px) {
      top: -29%;
    }
  }

  @media only screen and (max-width: 950px) {
    padding: 0;
  }
`;

const SearchLeft = styled.div`
  display: inline-block;
  width: 75%;

  @media only screen and (max-width: 950px) {
    width: 100%;
    display: block;
  }
`;

const SearchRight = styled.div`
  display: inline-block;
  width: 17%;

  @media only screen and (max-width: 950px) {
    width: 25%;
    margin: 10px 0 10px 25px;
  }

  @media only screen and (min-width: 350px) and (max-width: 415px) {
    width: 30%;
  }
`;

export { Box };
export default Index;

import styled from "styled-components";
import Layout from "../components/Layout";
import PostList from "../components/PostList";
import { PostInput } from "../components/Input";
import { EventSearchButton } from "../components/Button";
import { SelectButton } from "../components/SelectBar";
import DatePicker from "react-datepicker-styled-components";

const _URL = "http://10.58.4.202:8000/event/all";

class BoardList extends React.Component {
  state = {
    posts: [],
    title: "",
    startDate: new Date(),
    endDate: new Date(),
    building: ""
  };

  componentDidMount = async () => {
    const res = await fetch(`${_URL}/0/8`);
    const json = await res.json();

    this.setState({
      posts: json
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleStartDateChange = date => {
    this.setState({
      startDate: date
    });
  };
  handleEndDateChange = date => {
    this.setState({
      endDate: date
    });
  };

  handleSelect = e => {
    this.setState({
      building: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(e);
    const { title, start_date, end_date, building } = this.state;
  };

  handleShowMore = async () => {
    // fetch 날려서 데이터 8개 원래 배열에 더 저장하기
    const { posts } = this.state;
    const start_idx = posts.length;
    const last_idx = start_idx + 8;

    const res = await fetch(`${_URL}/${start_idx}/${last_idx}`);
    const data = await res.json();

    this.setState({
      posts: [...this.state.posts, ...data]
    });
  };

  render() {
    const { posts, title, startDate, endDate, building } = this.state;

    return (
      <Layout>
        <SearchWrap>
          <InnerWrap>
            <LabelWrap>
              <label for="title">Title : </label>
              <label for="title">Building : </label>
              <label for="title">Date : </label>
            </LabelWrap>
            <InputWrap>
              <PostInput
                name="title"
                value={title}
                onChange={this.handleChange}
              />
              <SelectButton building={building} onChange={this.handleSelect} />
              <DatePicker
                dateFormat="yyyy/MM/dd"
                onChange={this.handleStartDateChange}
                selected={startDate}
              />
              &nbsp; ~ &nbsp;
              <DatePicker
                dateFormat="yyyy/MM/dd"
                onChange={this.handleEndDateChange}
                selected={endDate}
              />
            </InputWrap>
            <EventSearchButton onClick={this.handleSubmit} />
          </InnerWrap>
        </SearchWrap>

        {/* 포스트 뿌리기 시작 */}
        {posts.length > 0 ? (
          <div style={{ width: "75%", margin: "85px auto 0" }}>
            <PostList list={posts} />
          </div>
        ) : (
          <div style={{ width: "75%", height: "30%", margin: "30px auto" }}>
            <p>현재 등록된 이벤트가 없습니다.</p>
          </div>
        )}
        <MoreBtnWrap>
          <MoreBtnDiv>
            <InnerBtnDiv onClick={this.handleShowMore}>더 불러오기</InnerBtnDiv>
          </MoreBtnDiv>
        </MoreBtnWrap>
        {/* 포스트 뿌리기 끝 */}
      </Layout>
    );
  }
}

const SearchWrap = styled.div`
  width: 100%;
  min-width: 500px;
  max-width: 1920px;
  height: 200px;
  position: relative;
  top: 83px;
  background-color: #e0e0e0;
`;

const InnerWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 0 0 12%;
`;

const LabelWrap = styled.div`
  width: 10%;
  display: inline-block;
  text-align: center;
  box-sizing: border-box;
  vertical-align: super;

  label {
    display: block;
    margin-top: 20px;
  }
`;

const InputWrap = styled.div`
  width: 69%;
  display: inline-block;
  vertical-align: top;

  .gmiVjD {
    display: inline-block;
  }
  .react-datepicker__input-container input {
    width: 200px;
    height: 30px;
    font-size: 15px;
    font-weight: 200;
    color: gray;
  }
`;

const MoreBtnWrap = styled.div`
  width: 100%;
  height: 60px;
  margin: 20px auto 0;
`;

const MoreBtnDiv = styled.div`
  width: 15%;
  height: 100%;

  margin: 0 auto;
`;

const InnerBtnDiv = styled.div`
  text-align: center;
  width: 100%;
  height: 40px;
  line-height: 3;
  border: 1px solid;
  cursor: pointer;
`;

export default BoardList;

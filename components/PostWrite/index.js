import styled from "styled-components";
import DatePicker from "react-datepicker-styled-components";
import TimePicker from "rc-time-picker";
import moment from "moment";
import { SelectButton } from "../SelectBar";
import { PostWriteButton } from "../Button";
import { _URL } from "../../config/constants";

const format = "h:mm a";

const now = moment()
  .hour(0)
  .minute(0);

class PostWrite extends React.Component {
  state = {
    date: new Date(),
    start_time: now,
    end_time: now,
    title: "",
    building_id: "",
    place: "",
    main_text: "",
    max_rsvp: "",
    photo_url: ""
  };

  handleStartTimeChange = value => {
    const time = value.format(format);
    this.setState({
      start_time: time
    });
  };

  handleEndTimeChange = value => {
    const time = value.format(format);
    this.setState({
      end_time: time
    });
  };

  handleDateChange = date => {
    this.setState({
      date: date
    });
  };

  handleBuildingSelect = e => {
    this.setState({
      building_id: e.target.value
    });
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = async () => {
    const { date, start_time, end_time, title, building_id, place, main_text, max_rsvp, photo_url } = this.state;
    const user_pk = sessionStorage.getItem("user_pk");

    const data = {
      date: date.toLocaleString().slice(0, 11),
      start_time: start_time.toString(),
      end_time: end_time.toString(),
      title,
      building_id,
      place,
      main_text,
      max_rsvp,
      user_pk,
      photo_url
    };

    // console.log(start_time);
    // console.log(end_time);

    const res = await fetch(`${_URL}/event/write`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (res.status >= 400) {
      alert("오류가 발생했습니다.");
      return;
    }

    const result = await res.json();

    alert("포스트 작성 완료");
    window.location.href = `/post/${result.event_id}`;
  };

  render() {
    return (
      <Wrapper>
        <Container>
          <h2 style={{ textAlign: "center" }}>이벤트 등록하기</h2>
          <TitleWrap>
            <input type="text" name="title" value={this.state.title} onChange={e => this.handleInputChange(e)} placeholder="Enter Title" />
          </TitleWrap>
          <BodyWrap>
            <LeftBox>
              <ul>
                <li>날짜</li>
                <li>시작 / 종료</li>
                <li>장소</li>
                <li>지점</li>
                <li>제한인원</li>
                <li>썸네일 이미지 url</li>
                <li>본문 작성</li>
              </ul>
            </LeftBox>
            <RightBox>
              <DatePicker onChange={this.handleDateChange} selected={this.state.date} />
              <br />
              <TimePicker
                showSecond={false}
                defaultValue={this.state.start_time}
                onChange={this.handleStartTimeChange}
                format={format}
                use12Hours
                inputReadOnly
              />
              <TimePicker
                showSecond={false}
                defaultValue={this.state.end_time}
                onChange={this.handleEndTimeChange}
                format={format}
                use12Hours
                inputReadOnly
              />
              <input
                style={{ width: 470, fontSize: 15 }}
                type="text"
                name="place"
                value={this.state.place}
                onChange={e => this.handleInputChange(e)}
                placeholder="Enter place"
              />
              <SelectButton onChange={this.handleBuildingSelect} value={this.state.building_id} />
              <input
                style={{ width: 150, height: 45, marginTop: 18 }}
                type="number"
                name="max_rsvp"
                value={this.state.max_rsvp}
                onChange={e => this.handleInputChange(e)}
                placeholder="max_rsvp"
              />
              <br />
              <input
                style={{ width: 150, height: 30, margin: "10px auto 5px" }}
                type="text"
                value={this.state.photo_url}
                name="photo_url"
                onChange={e => this.handleInputChange(e)}
              />
              <br />
              <br />
              <textarea rows="5" col="50" name="main_text" style={{ width: "100%", height: "35%" }} onChange={e => this.handleInputChange(e)} />
              <PostWriteButton onClick={this.handleClick} />
            </RightBox>
          </BodyWrap>
        </Container>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const TitleWrap = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 20px;

  input {
    width: 100%;
    height: 100%;
    font-size: 18px;
  }
`;

const BodyWrap = styled.div`
  width: 100%;
  display: -webkit-box;
`;

const LeftBox = styled.div`
  width: 20%;
  text-align: center;

  ul {
    padding: 0;
  }

  li {
    list-style: none;
    font-size: 17px;
    margin: 0 0 50px 0;
  }
`;

const RightBox = styled.div`
  width: 80%;

  .gmiVjD {
    display: inline-block;
  }

  input {
    width: 220px;
    height: 50px;
    margin: 0 30px 25px 0;
  }

  .rc-time-picker-input {
    font-size: 17px;
  }
`;

export default PostWrite;

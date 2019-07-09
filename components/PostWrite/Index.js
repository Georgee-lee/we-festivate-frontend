import styled from "styled-components";
import DatePicker from "react-datepicker-styled-components";
import TimePicker from "rc-time-picker";
import { SelectButton } from "../SelectBar";
import { PostWriteButton } from "../Button";

const format = "h:mm a";

class PostWrite extends React.Component {
  state = {
    startDate: new Date(),
    endDate: new Date(),
    title: "",
    building: "",
    place: "",
    content: "",
    max_rsvp: ""
  };

  handleTimeChange = value => {
    let time = value.format(format);
    console.log(typeof time);
  };

  handleStartDateChange = date => {
    this.setState({
      startDate: date
    });
  };

  handleBuildingChange = item => {
    this.setState({
      building: item
    });
  };

  handleClick = () => {
    console.log("d");
  };

  render() {
    return (
      <Wrapper>
        <Container>
          <h2 style={{ textAlign: "center" }}>이벤트 등록하기</h2>
          <TitleWrap>
            <input
              type="text"
              value={this.state.title}
              placeholder="Enter Title"
            />
          </TitleWrap>
          <BodyWrap>
            <LeftBox>
              <ul>
                <li>날짜 / 시간</li>
                <li>장소</li>
                <li>지점</li>
                <li>제한인원</li>
                <li>썸네일 이미지</li>
                <li>본문 작성</li>
              </ul>
            </LeftBox>
            <RightBox>
              <DatePicker
                onChange={this.handleStartDateChange}
                selected={this.state.startDate}
              />
              / &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <TimePicker
                showSecond={false}
                onChange={this.handleTimeChange}
                format={format}
                use12Hours
                inputReadOnly
              />
              <input
                style={{ width: 470 }}
                type="text"
                value={this.state.place}
                placeholder="Enter place"
              />
              <SelectButton
                onChange={this.handleBuildingChange}
                value={this.state.building}
              />
              <input
                style={{ width: 150, height: 45, marginTop: 18 }}
                type="text"
                value={this.state.max_rsvp}
                placeholder="max_rsvp"
              />
              <br />
              <br />
              <input
                style={{ width: 150, height: 30, margin: "0 0 20px 0" }}
                type="file"
                onChange={this.onChange}
              />
              <br />
              <br />
              <textarea
                rows="5"
                col="50"
                style={{ width: "100%", height: "35%" }}
              />
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
  display: flex;
  justify-content: space-between;
  align-items: stretch;
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

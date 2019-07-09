import styled from "styled-components";

class CommentWrite extends React.Component {
  state = {
    content: "",
    user_name: "" // Token을 던져줘서 지금 로그인 한 유저의 이름을 얻어낸다.
  };

  render() {
    return (
      <div style={{ marginBottom: 20 }}>
        <InputBox />
        <SubmitBtn>등록</SubmitBtn>
      </div>
    );
  }
}

const InputBox = styled.input`
  width: 70%;
  height: 50px;
  margin-right: 10px;

  outline: none;
  font-size: 17px;
  font-weight: 300;

  vertical-align: middle;
`;

const SubmitBtn = styled.button`
  width: 5%;
  height: 51px;
  font-size: 15px;

  background-color: green;
  color: white;

  outline: none;
`;

export default CommentWrite;

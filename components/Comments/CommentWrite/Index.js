import styled from "styled-components";
import fetch from "isomorphic-unfetch";

const _URL = "http://10.58.1.131:8000/user";

class CommentWrite extends React.Component {
  state = {
    postId: this.props.postId,
    content: "",
    user_name: "" // Token을 던져줘서 지금 로그인 한 유저의 이름을 얻어낸다.
  };

  checkUserName = async () => {
    const access_token = sessionStorage.getItem("access_token");

    const token = {
      Authorization: access_token
    };

    // TOKEN이 있으면 로그인 한 상태니까 바로 통신하면 된다.
    if (access_token) {
      const res = await fetch(`${_URL}/abcd`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: access_token
        }
      });

      if (res.status >= 400) {
        const result = await res.json();
        alert(result.message);
        return;
      }

      const name = await res.json();
      console.log(name);
    }
    // TOKEN이 없다면 로그인 안 한 거니까 로그인 하라고 경고창 띄우기
    else {
      alert("로그인이 필요합니다");
    }
  };

  handleSubmit = async () => {
    const { user_name, content, postId } = this.state;

    const comment = {
      user_name,
      content
    };

    const res = await fetch(`${_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(comment)
    });

    if (res.status >= 400) {
      const result = await res.json();
      alert(result.message);
      return;
    }

    const response = res.json();
    console.log(response);

    window.location.href = "/detail/" + postId;
  };

  render() {
    return (
      <div style={{ marginBottom: 20 }}>
        <InputBox onClick={this.checkUserName} />
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
`;

const SubmitBtn = styled.button`
  width: 5%;
  min-width: 45px;
  height: 51px;
  font-size: 15px;
  vertical-align: middle;

  background-color: green;
  color: white;

  outline: none;
`;

export default CommentWrite;

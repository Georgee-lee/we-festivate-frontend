import styled from "styled-components";
import fetch from "isomorphic-unfetch";
import { _URL } from "../../../config/constants";

class CommentWrite extends React.Component {
  state = {
    postId: this.props.postId,
    comment: ""
  };

  checkUserName = async () => {
    const access_token = sessionStorage.getItem("access_token");

    if (!access_token) {
      alert("로그인이 필요합니다");
    }
  };

  handleSubmit = async () => {
    const user_pk = sessionStorage.getItem("user_pk");

    if (!user_pk) {
      return;
    }

    const { postId, comment } = this.state;
    const date = new Date().toLocaleString();

    const newComment = {
      user_pk,
      comment_text: comment,
      created_at: date
    };

    const res = await fetch(`${_URL}/event/detail/${postId}/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newComment)
    });

    if (res.status >= 400) {
      alert("오류가 발생했습니다.");
      return;
    }

    const result = await res.json();

    if (result.comment_result) {
      window.location.reload();
    }
  };

  handleChange = e => {
    this.setState({
      comment: e.target.value
    });
  };

  render() {
    const token = sessionStorage.getItem("access_token");

    return (
      <div style={{ marginBottom: 20 }}>
        <InputBox
          value={this.state.comment}
          onClick={this.checkUserName}
          onChange={e => this.handleChange(e)}
          disabled={token ? false : true}
        />
        <SubmitBtn onClick={this.handleSubmit}>등록</SubmitBtn>
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

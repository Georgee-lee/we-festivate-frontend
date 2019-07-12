import styled from "styled-components";
import fetch from "isomorphic-unfetch";
import { _URL } from "../../../config/constants";

class CommentWrite extends React.Component {
  state = {
    postId: this.props.postId,
    reply_text: ""
  };

  checkUserName = async () => {
    const access_token = sessionStorage.getItem("access_token");

    if (!access_token) {
      alert("로그인이 필요합니다");
    }

    // TOKEN이 있으면 로그인 한 상태니까 바로 통신하면 된다.
    // if (access_token) {
    //   const res = await fetch(`${_URL}/abcd`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: access_token
    //     }
    //   });

    //   if (res.status >= 400) {
    //     const result = await res.json();
    //     alert(result.message);
    //     return;
    //   }

    //   const name = await res.json();
    //   console.log(name);
    // }
    // TOKEN이 없다면 로그인 안 한 거니까 로그인 하라고 경고창 띄우기
  };

  handleSubmit = async () => {
    const user_id = sessionStorage.getItem("user_id");

    if (!user_id) {
      return;
    }

    const { postId, reply_text } = this.state;
    const date = new Date().toLocaleString();

    const comment = {
      user_id,
      reply_text
    };

    const res = await fetch(`${_URL}/event/detail/${postId}/reply`, {
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

    const result = await res.json();

    if (result.reply_result) {
      alert(result.user_id + result.reply_message);

      const newComment = {
        id: result.id,
        user_id_id: user_id,
        reply_text,
        created_at: date
      };

      this.props.saveComment(newComment);

      this.setState({
        reply_text: ""
      });
    } else {
      alert(result.reply_message);
    }
  };

  handleChange = e => {
    this.setState({
      reply_text: e.target.value
    });
  };

  render() {
    const token = sessionStorage.getItem("access_token");

    return (
      <div style={{ marginBottom: 20 }}>
        <InputBox
          value={this.state.reply_text}
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

import styled from "styled-components";

const Comment = ({ postId, user_name, content }) => {
  const date = new Date().toLocaleString();

  return (
    <PostWrap>
      <Left>
        <p style={{ margin: "0 0 10px 0" }}>{user_name}</p>
        <span>{date}</span>
      </Left>
      <Right>
        <p style={{ margin: 0 }}>{content}</p>
      </Right>
    </PostWrap>
  );
};

const PostWrap = styled.div`
  width: 100%;
  height: 100px;
  overflow: hidden;

  ::after {
    display: block;
    content: "";
    clear: both;
  }
`;

const Left = styled.div`
  float: left;
  margin: 15px;
  padding-right: 15px;

  border-right: 1px dotted;

  text-align: center;

  ::after {
    display: block;
    content: "";
    clear: both;
  }
`;

const Right = styled.div`
  margin: 20px;
  height: 70%;

  border-bottom: 1px dotted;
`;

export default Comment;

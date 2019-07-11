import styled from "styled-components";
import Comment from "../Comment/Index";

const CommentList = ({ List }) => {
  return (
    <Wrapper>
      {List.map(item => {
        return (
          <Comment
            key={item.id}
            user_id={item.user_id}
            comment={item.reply_text}
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin-bottom: 15px;
  border-top: 1px dotted gray;
  border-bottom: 1px dotted gray;
`;

export default CommentList;

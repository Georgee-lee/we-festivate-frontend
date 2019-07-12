import styled from "styled-components";
import Comment from "../Comment";

const CommentList = ({ list }) => {
  return (
    <Wrapper>
      {list.map(item => {
        return (
          <Comment
            key={item.id}
            user_id={item.user_id_id}
            comment={item.reply_text}
            time={item.created_at}
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

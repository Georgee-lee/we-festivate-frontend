import styled from "styled-components";
import Comment from "../Comment/Index";

const CommentList = ({ List }) => {
  return (
    <Wrapper>
      {List.map(item => {
        return (
          <Comment key={item.id} name={item.user_name} content={item.content} />
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

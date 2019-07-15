/* eslint-disable react/react-in-jsx-scope */
import styled from "styled-components";
import PostItem from "../PostItem"; // 각각의 포스트 Div

const PostList = ({ list }) => {
  return (
    <Wrapper>
      <GridWrap>
        {list.map(post => {
          const max = post.max_rsvp >= 999999 ? "제한없음" : post.max_rsvp;

          return (
            <PostItem
              key={post.id}
              id={post.id}
              title={post.title}
              building__name={post.building__name}
              date={post.date}
              image={post.photo_url}
              max_rsvp={max}
              current_rsvp={post.current_rsvp}
            />
          );
        })}
      </GridWrap>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

const GridWrap = styled.div`
  display: grid;
  width: 100%;
  margin-bottom: 10px;
  grid-gap: 2px;
  grid-template-columns: 25% 25% 25% 25%;

  @media only screen and (max-width: 1125px) {
    grid-template-columns: 33% 33% 33%;
  }
  @media only screen and (max-width: 950px) {
    grid-template-columns: 50% 50%;
  }
  @media only screen and (max-width: 680px) {
    grid-template-columns: 100%;
  }
`;

export default PostList;

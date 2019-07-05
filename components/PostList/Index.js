import styled from 'styled-components';
import Post from '../PostItem';

const PostList = (props) => {

  const { list } = props;

  return (
    <Wrapper>
      <GridWrap>
        {
          list.map((post, idx) => {
            return (
              <Post
                key={post.idx}
                title={post.title}
                building_name={post.building_name}
                image={post.image}
              />
            )
          })
        }
      </GridWrap>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`

const GridWrap = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 2px;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 350px 350px 350px;

  @media only screen and (max-width: 1125px) {
    grid-template-columns: 33% 33% 33%;
    grid-template-rows: 350px 350px 350px;
  }
  @media only screen and (max-width: 950px) {
    grid-template-columns: 50% 50%;
    grid-template-rows: repeat(5, 350px);
  }
  @media only screen and (max-width: 680px) {
    grid-template-columns: 100%;
    grid-template-rows: repeat(9, 350px);
  }
`

export default PostList;
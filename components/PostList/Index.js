import styled from 'styled-components';

const PostList = (props) => {

  // const postlist = props.list;

  return (
    <Wrapper>
    <GridWrap>
      <Post>
        1번 박스
      </Post>
      <Post>
        2번 박스
      </Post>
      <Post>
        3번 박스
      </Post>
      <Post>
        4번 박스
      </Post>
      <Post>
        5번 박스
      </Post>
      <Post>
        6번 박스
      </Post>
      <Post>
        7번 박스
      </Post>
      <Post>
        8번 박스
      </Post>
      <Post>
        9번 박스
      </Post>
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
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 150px 150px 150px;
  div:nth-child(5) {
    grid-column: 1 / 3;
  }
  div:nth-child(6) {
    grid-column: 3 / 5;
  }
`

const Post = styled.div`
  ${props => props.children}
`

export default PostList;
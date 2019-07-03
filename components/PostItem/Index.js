import styled from 'styled-components';

const PostItem = (props) => {
  return (
    <Post>
      <ImageBox>
        <img src={props.image} alt="Avater" width="100%" height="90%"/>
      </ImageBox>
      <PostDetailBox>
        <h4 style={{ margin: 0, padding: 10, fontSize: 20 }}><b>{props.title}</b></h4> 
        <p style={{ margin: 0, padding: 10 }}>{props.building_name}</p>
      </PostDetailBox>
    </Post>
  )
};

const Post = styled.div`
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  :nth-child(5) {
    grid-column: 1 / 3;
  }
  :nth-child(6) {
    grid-column: 3 / 5;
  }
`

const PostDetailBox = styled.div`
  padding: 2px 16px;
  ${props => props.children}
`

const ImageBox = styled.div`
  width: 100%;
  height: 250px;
  margin: 0;
  ${props => props.children}
`

export default PostItem;
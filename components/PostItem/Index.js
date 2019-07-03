import styled from 'styled-components';

const PostItem = (props) => {
  return (
    <Post>
      <ImageBox image={props.image} />
      <PostDetailBox>
        <h4 style={{ margin: 0, padding: 10, fontSize: 15 }}><b>{props.title}</b></h4> 
        <p style={{ margin: 0, padding: 10 }}>{props.building_name}</p>
      </PostDetailBox>
    </Post>
  )
};

const Post = styled.div`
  width: 100%;
  :nth-child(5) {
    grid-column: 1 / 3;
  }
  :nth-child(6) {
    grid-column: 3 / 5;
  }
`

const PostDetailBox = styled.div`
  height: 100px;
  background-color: white;
`

const ImageBox = styled.div`
  width: 100%;
  height: 250px;
  margin-bottom: 1px;
  background: url(${props => props.image}) no-repeat;
  background-size: cover;
  background-position-y: center;
  
`

export default PostItem;
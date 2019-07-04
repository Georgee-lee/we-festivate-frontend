import styled from 'styled-components';

const PostItem = (props) => {
  return (
    <Post>
      <ImageBox>
        <img src={props.image} alt='photo' width='100%' height='100%' />
      </ImageBox>
      <PostDetailBox>
        <h4 style={{ margin: 0, padding: 10, fontSize: 15 }}><b>{props.title}</b></h4> 
        <p style={{ margin: 0, padding: 10 }}>{props.building_name}</p>
      </PostDetailBox>
    </Post>
  )
};

const Post = styled.div`
  width: 100%;
  overflow: hidden;

  :nth-child(5) {
    grid-column: 1 / 3;
  }
  :nth-child(6) {
    grid-column: 3 / 5;
  }
  :nth-child(8) {
    grid-column: 2 / 4;
  }
  :nth-child(14) {
    grid-column: 1 / 3;
  }
  :nth-child(15) {
    grid-column: 3 / 5;
  }
  :nth-child(17) {
    grid-column: 2 / 4;
  }

  @media only screen and (max-width: 1125px) {
    :nth-child(5) {
      grid-column: unset;
    }
    :nth-child(6) {
      grid-column: unset;
    }
    :nth-child(8) {
      grid-column: unset;
    }
    :nth-child(14) {
      grid-column: unset;
    }
    :nth-child(15) {
      grid-column: unset;
    }
    :nth-child(17) {
      grid-column: unset;
    }
  }
`

const PostDetailBox = styled.div`
  height: 98px;
  background-color: white;
  overflow: hidden;
`

const ImageBox = styled.div`
  width: 100%;
  height: 250px;
  margin-bottom: 1px;
  overflow: hidden;
  
  opacity: 1;
  transform: scale(1);
  -webkit-transform: scale(1);
	transition: .3s ease-in-out;
	-webkit-transition: .3s ease-in-out;
  
  &:hover {
    opacity: .5;
    -webkit-transform: scale(1.1);
	  transform: scale(1.1);
  }
`

export default PostItem;

/*
background: url(${props => props.image}) no-repeat;
  background-size: cover;
  background-position-y: center;
*/
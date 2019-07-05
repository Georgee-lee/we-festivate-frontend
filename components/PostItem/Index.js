import styled from 'styled-components';
import Link from 'next/link';
import { CardImage } from '../CardImage';

const PostItem = (props) => {
  return (
    <Link as={`/post/${props.id}`} href={`'/post?${props.id}`}>
      <Post key={props.id}>
        <CardImage url={props.image}/>
        <PostDetailBox>
          <h4 style={{ margin: 0, padding: 10, fontSize: 15 }}><b>{props.title}</b></h4> 
          <p style={{ margin: 0, padding: 10 }}>{props.building_name}</p>
        </PostDetailBox>
      </Post>
    </Link>
  )
};

const Post = styled.div`
  width: 100%;
  overflow: hidden;
  cursor: pointer;

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

export default PostItem;

/*
background: url(${props => props.image}) no-repeat;
  background-size: cover;
  background-position-y: center;
*/
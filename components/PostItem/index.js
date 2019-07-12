/* eslint-disable react/react-in-jsx-scope */
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import { CardImage } from "../CardImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const PostItem = props => {
  return (
    <Link as={`/post/${props.id}`} href={`'/post?${props.id}`}>
      <Post key={props.id}>
        <CardImage url={props.image} />
        <PostDetailBox>
          <h4 style={{ margin: "10px", padding: 0, fontSize: 15 }}>
            <b>{props.title}</b>
          </h4>
          <div style={{ position: "absolute", bottom: 0, right: "10px" }}>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <p style={{ display: "inline-block", marginLeft: "5px" }}>
              {props.building__name}
            </p>
          </div>
          <p style={{ marginLeft: "10px" }}>{props.date}</p>
          <div style={{ position: "absolute", bottom: 0, left: "10px" }}>
            <span>{props.current_rsvp}</span> / <span>{props.max_rsvp}</span>
          </div>
        </PostDetailBox>
      </Post>
    </Link>
  );
};

const postFade = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

const Post = styled.div`
  width: 100%;
  overflow: hidden;
  cursor: pointer;

  animation: 1s ${postFade} ease-out;
`;

const PostDetailBox = styled.div`
  height: 98px;
  background-color: white;
  overflow: hidden;
  position: relative;

  p {
    margin: 0;
    padding: 0;
  }
`;

export default PostItem;

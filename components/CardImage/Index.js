import styled from "styled-components";

export const CardImage = props => (
  <ImageBox>
    <Image src={props.url} alt="photo" />
  </ImageBox>
);

const ImageBox = styled.div`
  width: 100%;
  height: 250px;
  margin-bottom: 1px;
  overflow: hidden;
`;

const Image = styled.img`
  position: relative;
  top: 50%;
  margin-top: -230px;
  left: 50%;
  margin-left: -230px;

  opacity: 1;
  transform: scale(1);
  -webkit-transform: scale(1);
  transition: 0.3s ease-in-out;
  -webkit-transition: 0.3s ease-in-out;

  &:hover {
    opacity: 0.5;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

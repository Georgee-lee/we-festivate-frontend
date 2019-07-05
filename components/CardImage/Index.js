import styled from 'styled-components';

export const CardImage = (props) => (
  <ImageBox>
    <Image src={props.url} alt='photo' width='100%' height='100%' />
  </ImageBox>
)

const ImageBox = styled.div`
  width: 100%;
  height: 250px;
  margin-bottom: 1px;
  overflow: hidden;
`

const Image = styled.img`
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
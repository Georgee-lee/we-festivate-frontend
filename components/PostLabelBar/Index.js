import styled from 'styled-components';

const PostLabelBar = (props) => {

  const { color, bgc } = props;

  return (
    <Tagbar bgc={bgc && bgc}>
      <TextBox>
        <Headtext color={color}>추천 이벤트</Headtext>
        <Subtext color={color}>바로 참여 가능한 이벤트를 한눈에 보실 수 있습니다.</Subtext>
      </TextBox>
    </Tagbar>
  )
};

const Tagbar = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${props => props.bgc ? props.bgc : "white"}
`

const TextBox = styled.div`
  width: 80%;
  padding: 25px;
  margin-left: 5%;
`

const Headtext = styled.h2`
  display: inline-block;
  fontSize: 40;
  margin: 0 10px 0 0;
  color: ${props => props.color ? props.color : 'black'}
  ${props => props.children}
`

const Subtext = styled.span`
  color: ${props => props.color ? props.color : 'gray'}
  font-size: 18px;
  ${props => props.children}
`

export default PostLabelBar;
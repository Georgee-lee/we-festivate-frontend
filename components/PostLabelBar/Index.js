import styled from "styled-components";

const PostLabelBar = props => {
  const { color, bgc, title, subtitle } = props;

  return (
    <Tagbar bgc={bgc && bgc}>
      <TextBox>
        <Headtext color={color}>{title}</Headtext>
        <Subtext color={color}>{subtitle}</Subtext>
      </TextBox>
    </Tagbar>
  );
};

const Tagbar = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${props => (props.bgc ? props.bgc : "white")};
`;

const TextBox = styled.div`
  width: 78%;
  padding: 35px;
  margin: 0 auto;

  @media only screen and (min-width: 350px) and (max-width: 415px) {
    padding: 0;

    h2 {
      display: block;
    }
  }
`;

const Headtext = styled.h2`
  display: inline-block;
  fontsize: 40;
  margin: 0 10px 0 0;
  color: ${props => (props.color ? props.color : "black")};
`;

const Subtext = styled.span`
  color: ${props => (props.color ? props.color : "gray")}
  font-size: 18px;
`;

export default PostLabelBar;

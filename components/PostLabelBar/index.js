import styled from "styled-components";

const PostLabelBar = props => {
  const { title, subtitle } = props;

  return (
    <Tagbar>
      <TextBox>
        <Headtext>{title}</Headtext>
        <Subtext>{subtitle}</Subtext>
      </TextBox>
    </Tagbar>
  );
};

const Tagbar = styled.div`
  width: 100%;
  background-color: white;
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

  @media only screen and (max-width: 720px) {
    display: block;
  }
`;

const Subtext = styled.span`
  font-size: 18px;
  color: gray;
`;

export default PostLabelBar;

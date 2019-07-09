import styled from "styled-components";
import Layout from "../components/Layout";

class Admin extends React.Component {
  state = {};

  render() {
    return (
      <Layout>
        <Wrapper>
          <LeftBox>asd</LeftBox>
          <RightBox>dsa</RightBox>
        </Wrapper>
      </Layout>
    );
  }
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 1450px;
  min-width: 650px;

  height: 100%;
  max-height: 900px;
  min-height: 750px;

  margin: 83px auto 20px;

  display: flex;
`;

const LeftBox = styled.div`
  flex: 0.5;

  background-color: lightgreen;
`;

const RightBox = styled.div`
  flex: 2;

  background-color: yellow;
`;

export default Admin;

import styled from "styled-components";
import Layout from "../components/Layout";
import Link from "next/link";
import PostWrite from "../components/PostWrite";
import MessageBox from "../components/Message";

class Admin extends React.Component {
  state = {
    writePage: false,
    messagePage: false
  };

  showWrite = () => {
    this.setState({
      messagePage: false,
      writePage: true
    });
  };

  showMessage = () => {
    this.setState({
      writePage: false,
      messagePage: true
    });
  };

  render() {
    const { writePage, messagePage } = this.state;

    return (
      <Layout>
        <Wrapper>
          <LeftBox>
            <LeftMenuList>
              <button type="button" onClick={this.showWrite}>
                이벤트 작성
              </button>
              <button type="button" onClick={this.showMessage}>
                메시지함
              </button>
            </LeftMenuList>
          </LeftBox>
          <RightBox>
            {writePage ? <PostWrite /> : messagePage ? <MessageBox /> : ""}
          </RightBox>
        </Wrapper>
      </Layout>
    );
  }
}

const Wrapper = styled.div`
  width: 80%;
  max-width: 1450px;
  min-width: 650px;

  height: 100%;
  max-height: 900px;
  min-height: 750px;

  background-color: white;
  margin: 100px auto 20px;

  display: flex;
  justify-content: space-between;
  align-items: stretch;
`;

const LeftBox = styled.div`
  width: 20%;
  border-right: 1px dotted;
`;

const RightBox = styled.div`
  width: 80%;
`;

const LeftMenuList = styled.div`
  width: 100%;
  height: 100%;

  button {
    display: block;
    height: 60px;

    font-size: 16px;
    margin: 30px auto;

    outline: none;
    border: none;
    cursor: pointer;
  }
`;

export default Admin;

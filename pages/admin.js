import styled from "styled-components";
import Layout from "../components/Layout";
import Link from "next/link";
import PostWrite from "../components/PostWrite";

class Admin extends React.Component {
  state = {};

  render() {
    return (
      <Layout>
        <Wrapper>
          <LeftBox>
            <LeftMenuList>
              <Ul>
                <Li>
                  <Link href="/">
                    <p>이벤트 등록</p>
                  </Link>
                </Li>
                <Li>
                  <Link href="/">
                    <p>메시지함</p>
                  </Link>
                </Li>
              </Ul>
            </LeftMenuList>
          </LeftBox>
          <RightBox>
            <PostWrite />
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
`;

const Ul = styled.ul`
  width: 100%;
  height: 100%;

  padding: 30px 0 0 50px;
`;

const Li = styled.li`
  list-style: none;
  margin-bottom: 50px;

  cursor: pointer;
`;

export default Admin;

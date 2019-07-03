import styled from 'styled-components';
import Link from 'next/link';
import Layout from '../components/Layout';
import { SearchInput } from '../components/Input'
import { SearchButton } from '../components/Button'

function Index() {
  return (
    <Layout style={{ margin: 0, padding: 0 }}>
      <Box>
      <video muted autoPlay loop style={{ width: `100%` }}>
        <source src="../static/wework.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <SearchWrap>
        <InnerBox>
          <h2 style={{ margin: 0, fontSize: 25, paddingLeft: '2%' }}>Which event do you want?</h2>
          <SearchBox>
            <div style={{ display: 'inline-block', width: '75%'}}>
              <SearchInput />
            </div>
            <div style={{ display: 'inline-block', width: '17%' }}>
              <SearchButton />
            </div>
          </SearchBox>
        </InnerBox>
      </SearchWrap>
      </Box>
    </Layout>
  );
}

const Box = styled.div`
  max-height: 650px;
  overflow: hidden;
`

const SearchWrap = styled.div`
  position: absolute;
  top: 40%;
  left: 17%;
  width: calc(75vw - 100px);
  height: 180px;

  margin: 0 auto;
`

const InnerBox = styled.div`
  padding: 20px 30px 30px 30px;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
`

const SearchBox = styled.div`
  width: 98%;
  margin-top: 20px;
  margin-left: 10px;
  padding: 20px 0;
  background-color: rgba(255, 255, 255, 0.8);
`

export default Index;
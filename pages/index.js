import styled from 'styled-components';
import Link from 'next/link';
import Layout from '../components/Layout';
import { SearchInput } from '../components/Input'
import { SearchButton } from '../components/Button'
import PostList from '../components/PostList';
import PostLabelBar from '../components/PostLabelBar';

function Index() {
  return (
    <Layout style={{ margin: 0, padding: 0 }}>
      <Box>
      <video muted autoPlay loop style={{ width: `100%` }}>
        <source src="../static/wework.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <SearchWrap>
        <div>
          <SearchBox>
            <div style={{ display: 'inline-block', width: '75%'}}>
              <SearchInput />
            </div>
            <div style={{ display: 'inline-block', width: '17%' }}>
              <SearchButton />
            </div>
          </SearchBox>
        </div>
      </SearchWrap>
      </Box>
      <PostLabelBar />
      <PostList />
      <PostLabelBar color="white" bgc="#e95349"/>
    </Layout>
  );
}

const Box = styled.div`
  max-height: 650px;
  overflow: hidden;
  position: relative;
`

const SearchWrap = styled.div`
  position: absolute;
  bottom: 30%;
  left: 20%;
  width: calc(75vw - 100px);
  
  margin: 0 auto;
`

const SearchBox = styled.div`
  width: 90%;
  padding: 20px 0;
  background-color: rgba(255, 255, 255, 0.6);
`

export default Index;
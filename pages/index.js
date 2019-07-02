import styled from 'styled-components';
import Link from 'next/link';
import Layout from '../components/Layout';

function Index() {
  return (
    <Layout>
      <Box>
      <video muted autoPlay loop style={{ width: `100%` }}>
        <source src="../static/wework.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </Box>
    </Layout>
  );
}

const Box = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 710px;
  width: 100%;
  overflow: hidden;
`

export default Index;
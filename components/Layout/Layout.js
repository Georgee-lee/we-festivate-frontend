import Header from '../Header'
import Footer from '../Footer'
import { GlobalStyle } from '../../pages/global-styles';

const Layout = props => (
  <>
  <GlobalStyle />
  <Header />
  {props.children}
  <Footer />
  </>
)

export default Layout;
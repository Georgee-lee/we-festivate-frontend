import Link from 'next/link';
import Auth from './Auth'

function Index() {
  return (
    <div>
      <p>index Page</p>
      <Link href='/Auth'>
        <a>Login</a>
      </Link>
    </div>
  );
}

export default Index;
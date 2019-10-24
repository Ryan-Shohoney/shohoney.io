import Link from 'next/link';
import Header from '../../components/header';

export default function Index() {
  return (
    <div>
      <Header/>
      <Link href="/">
        <a>
          &lt; Back Home
        </a>
      </Link>
      <h1>
        This is the landing page for the wedding.
      </h1>
    </div>
  )
}
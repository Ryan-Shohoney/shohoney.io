import Link from 'next/link';
import Header from '../components/header';

export default function About () {
  return (
    <div>
      <Header/>
      
      <Link href="/">
        <a>
          &lt; Back Home
        </a>
      </Link>
      <h1>
        This is the about page.
      </h1>
    </div>
  )
}
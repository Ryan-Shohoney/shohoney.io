import Link from 'next/link';
import Header from '../components/header';

const Index = _ => (
  <div>
    <Header />
    <h1>
      Hello, from Next.js
    </h1>
    <ul>
      <li>
        <Link href="/about">
          <a>
            About
          </a>
        </Link>
      </li>
      <li>
        <Link href="/wedding">
          <a>
            Wedding
          </a>
        </Link>
      </li>
    </ul>
  </div>
);

export default Index;
import Link from 'next/link';
import LandingLayout from '../components/LandingLayout';

const Index = _ => (
  <div>
    <LandingLayout>
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
    </LandingLayout>
  </div>
);

export default Index;
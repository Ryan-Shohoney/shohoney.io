import Link from 'next/link';

import {
  Navbar,
  NavItem
} from 'react-materialize';

/** 
 * Turns out it had nothing to do with react. It seems that it's a combination of issues. One issue, Materilaize stores
 * some elements outside of the app node.
*/
const Header = _ => {

  return (
    <div className="navbar-fixed">
      <Navbar alignLinks="right" brand={
        <a href="/">
          shohoney.io
        </a>
      }>

        <Link href="/wedding" >
          <a>
            Our Wedding
          </a>
        </Link>
        <Link href="/about">
          <a>
            About
          </a>
        </Link>
        <Link href="/blog">
          <a>
            Blog
          </a>
        </Link>
        <Link href="/nuts-and-bolts">
          <a>
            Nuts and Bolts
          </a>
        </Link>
        <style jsx>{`
          .brand-logo {
            padding: 0 15px;
          }
        `}</style>
      </Navbar>
    </div>
  )
};

export default Header;

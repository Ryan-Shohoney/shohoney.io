import Link from 'next/link';

import {
  Navbar,
  NavItem
} from 'react-materialize';

/** 
 * Unfortunately, because this is a react library, pathing isn't friendly.  Probably need
 * to fork this to fix the Link behavior.
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

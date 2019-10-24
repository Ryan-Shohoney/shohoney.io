import Link from 'next/link';

const headerStyles ={
  display: 'flex',
  padding: '1em 2.5em',
  backgroundColor: '#ededed',
  justifyContent: 'space-between' 
};

const Header = _ => (
  <header style={headerStyles}>
    <h1>
      shohoney.io
    </h1>

    <div>
    <Link href="/about">
      <a>
        About
      </a>
    </Link>
    </div>
  </header>
);

export default Header;

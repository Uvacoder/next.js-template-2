import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-3 px-6 flex justify-end">
      <Link href="/">
        <a className="pr-3">Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </header>
  );
};

export default Header;
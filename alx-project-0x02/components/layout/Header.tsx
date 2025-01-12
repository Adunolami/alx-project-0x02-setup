import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">My App</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/home">
              <a className="hover:underline">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="hover:underline">About</a>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <a className="hover:underline">Posts</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
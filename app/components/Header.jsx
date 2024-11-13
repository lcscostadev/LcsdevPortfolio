import React from 'react';
import { navLinks } from '../constants/index';

export default function Header() {
  return (
    <header className='bg-slate-500 flex flex-col items-center py-24'>
      <h1>Logo</h1>

      <nav>
        <ul className='flex gap-2'>
          {navLinks.map((nav, index) => (
            <li key={index}>
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

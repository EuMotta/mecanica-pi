'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { navLinks } from '../constants';
import logo from '../public/Logo4.svg';

const Navbar = () => (
  <div className="container flex flex-wrap items-center justify-between mx-auto ">
    <div className="md:block md:w-1/3">
      <Image src={logo} width={100} height={100} />
    </div>
    <div className="md:block md:w-1/3 text-center">
      <ul className="flex p-4 mt-4 border border-gray-100  md:flex-row justify-center items-center md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
        {navLinks.map((link) => (
          <li>
            <Link
              href={link.href}
              className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <div className="md:block md:w-1/3 text-right">
      <button type="button" className="bg-blue-700 text-white py-2 px-4 rounded">
        Login
      </button>
    </div>
  </div>
);

export default Navbar;

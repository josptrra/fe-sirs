import React from 'react';
import { IoMdSearch } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Navbar() {
  return (
    <div className="bg-blue-900 w-full flex justify-between py-6 px-4">
      <h1 className="font-bold text-4xl text-white">MEDDICAL</h1>
      <div className="flex gap-4">
        <IoMdSearch className="text-4xl text-white" />
        <GiHamburgerMenu className="text-4xl text-white" />
      </div>
    </div>
  );
}

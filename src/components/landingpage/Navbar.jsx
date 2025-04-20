import React from 'react';
import { IoMdSearch } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Navbar() {
  return (
    <div className="bg-blue-900 w-full ">
      <div className="w-full flex justify-between py-6 px-4 lg:px-0 lg:w-9/12 mx-auto">
        <h1 className="font-bold text-4xl text-white lg:hidden">MEDDICAL</h1>
        <div className="hidden lg:flex">
          <ul className="flex gap-8 text-white items-center text-xl font-semibold">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Doctors</li>
            <li>News</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex gap-4 items-center">
          <IoMdSearch className="text-4xl text-white" />
          <GiHamburgerMenu className="text-4xl text-white flex lg:hidden" />
          <button className="hidden lg:flex py-4 px-6 lg:px-10 bg-blue-300 rounded-full font-bold text-blue-900">
            Appointment
          </button>
        </div>
      </div>
    </div>
  );
}

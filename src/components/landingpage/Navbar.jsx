import React from 'react';
import { IoMdSearch } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Navbar() {
  return (
    <div className="bg-blue-900 w-full ">
      <div className="w-full flex justify-between py-6 px-4 lg:px-0 lg:w-9/12 mx-auto">
        <h1 className="font-bold text-3xl tracking-widest text-white lg:hidden">
          MEDDICAL
        </h1>
        <div className="hidden lg:flex">
          <ul className="flex gap-12 text-white items-center text-xl font-semibold">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Services</a>
            <a href="#">Doctors</a>
            <a href="#">News</a>
            <a href="#">Contact</a>
          </ul>
        </div>
        <div className="flex gap-4 items-center">
          <IoMdSearch className="text-3xl lg:text-4xl text-white" />
          <GiHamburgerMenu className="text-3xl text-white flex lg:hidden" />
          <button className="hidden lg:flex py-4 px-6 lg:px-10 bg-blue-300 rounded-full font-bold text-blue-900">
            Appointment
          </button>
        </div>
      </div>
    </div>
  );
}

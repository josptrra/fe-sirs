import React from 'react';
import { BsCalendar2Date } from 'react-icons/bs';
import { FaUserDoctor } from 'react-icons/fa6';
import { GiMedicines } from 'react-icons/gi';

export default function HeroMiniCard() {
  return (
    <div className="absolute lg:flex items-center justify-center justify-between w-full  hidden gap-8 -top-20">
      <div className="w-full bg-blue-900 text-white flex items-center justify-between px-8 py-6 text-2xl rounded-xl">
        <h1>Book an Appointment</h1>
        <BsCalendar2Date className="text-7xl" />
      </div>
      <div className="w-full bg-[#BFD2F8] text-blacks flex items-center justify-between px-8 py-6 text-2xl rounded-xl">
        <h1>Book an Appointment</h1>
        <FaUserDoctor className="text-7xl" />
      </div>
      <div className="w-full bg-blue-400 text-white flex items-center justify-between px-8 py-6 text-2xl rounded-xl">
        <h1>Book an Appointment</h1>
        <GiMedicines className="text-7xl" />
      </div>
    </div>
  );
}

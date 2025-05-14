import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMdTime } from 'react-icons/io';
import LogoNavbar from './LogoNavbar';

export default function header() {
  return (
    <div className="bg-white w-full lg:w-9/12 mx-auto py-2">
      <div className="w-full flex items-center justify-between">
        <LogoNavbar />
        <div className="flex p-3 gap-3 w-full lg:w-fit lg:gap-6">
          <div className="flex items-center justify-center gap-2 lg:gap-4">
            <FiPhoneCall className="text-2xl lg:text-4xl" />
            <div className="flex flex-col">
              <p className="font-bold ">Emergency</p>
              <p className="text-blue-700 font-semibold">(237) 681-812-255</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 lg:gap-4">
            <FaLocationDot className="text-2xl lg:text-4xl" />
            <div className="flex flex-col">
              <p className="font-bold ">Location</p>
              <p className="text-blue-700 font-semibold">Jembatan Kapur</p>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center gap-2 mx-auto lg:mx-0">
            <IoMdTime className="text-3xl lg:text-4xl lg:gap-4" />
            <div className="flex flex-col">
              <p className="font-bold ">Work Hour</p>
              <p className="text-blue-700 font-semibold">
                09:00 - 20:00 Everyday
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMdTime } from 'react-icons/io';

export default function header() {
  return (
    <div className="bg-white w-full p-3 gap-3 flex flex-wrap">
      <div className="flex items-center justify-center gap-2">
        <FiPhoneCall className="text-2xl" />
        <div className="flex flex-col">
          <p className="font-bold ">Emergency</p>
          <p className="text-blue-700 font-semibold">(237) 681-812-255</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2">
        <FaLocationDot className="text-2xl" />
        <div className="flex flex-col">
          <p className="font-bold ">Location</p>
          <p className="text-blue-700 font-semibold">Jembatan Kapur</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 mx-auto">
        <IoMdTime className="text-3xl" />
        <div className="flex flex-col">
          <p className="font-bold ">Work Hour</p>
          <p className="text-blue-700 font-semibold">09:00 - 20:00 Everyday</p>
        </div>
      </div>
    </div>
  );
}

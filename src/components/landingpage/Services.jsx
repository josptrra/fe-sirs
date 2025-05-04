import React from 'react';
import { TbFreeRights } from 'react-icons/tb';
import { LuHistory } from 'react-icons/lu';
import { IoLockClosedSharp } from 'react-icons/io5';
import { MdShutterSpeed } from 'react-icons/md';

export default function Services() {
  return (
    <div className="bg-white pt-12 md:pt-0 pb-8 md:pb-12 w-full lg:w-9/12 mx-auto">
      <h2 className="uppercase text-blue-500 font-bold text-lg lg:text-2xl tracking-widest lg:tracking-[.25em] text-center lg:pt-16">
        Care You Can Believe in
      </h2>
      <h1 className=" text-blue-900 text-3xl font-bold lg:text-4xl tracking-wider py-4 lg:tracking-widest text-center">
        Our Services
      </h1>
      <div className="flex w-8/12  mx-auto justify-center items-center gap-8">
        <div className="flex flex-col mt-6 md:mt-0 rounded-lg w-full md:w-fit  mx-auto overflow-hidden ">
          <div className="flex flex-wrap md:flex-nowrap md:flex-col border items-center justify-center">
            <div className="flex flex-col items-center justify-center px-8 py-6 gap-3 w-1/2 md:w-full hover:bg-blue-900 hover:text-white">
              <TbFreeRights className="text-blue-500 text-4xl" />
              <p className="font-semibold text-nowrap">Free Sign Up</p>
            </div>
            <div className="flex flex-col items-center justify-center px-8 py-6 gap-3 w-1/2 md:w-full hover:bg-blue-900 hover:text-white">
              <LuHistory className="text-4xl text-blue-500" />
              <p className="font-semibold text-nowrap">Medical History</p>
            </div>
            <div className="flex flex-col items-center justify-center px-8 py-6 gap-3 w-1/2 md:w-full hover:bg-blue-900 hover:text-white">
              <IoLockClosedSharp className="text-4xl text-blue-500" />
              <p className="font-semibold text-nowrap">Privacy Assured</p>
            </div>
            <div className="flex flex-col items-center justify-center px-8 py-6 gap-3 w-1/2 md:w-full hover:bg-blue-900 hover:text-white">
              <MdShutterSpeed className="text-4xl text-blue-500" />
              <p className="font-semibold text-nowrap">Fast Booking</p>
            </div>
          </div>
          <h1 className="text-center bg-blue-900 py-2 text-white font-semibold">
            View All
          </h1>
        </div>
        <div className="hidden md:block w-full">
          <h1 className="text-2xl font-semibold lg:tracking-[.15em]">
            A passion for putting patients first.
          </h1>
          <ul className="grid grid-cols-2 gap-y-2 gap-x-8 text-lg mt-4 lg:tracking-[.15em]">
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 bg-blue-500 rounded-full inline-block"></span>
              A Passion for Healing
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 bg-blue-500 rounded-full inline-block"></span>
              5-Star Care
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 bg-blue-500 rounded-full inline-block"></span>
              All our best
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 bg-blue-500 rounded-full inline-block"></span>
              Believe in Us
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 bg-blue-500 rounded-full inline-block"></span>
              A Legacy of Excellence
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 bg-blue-500 rounded-full inline-block"></span>
              Always Caring
            </li>
          </ul>
          <p className="text-justify tracking-widest py-8">
            We are committed to providing the best care for every patient. With
            a team of medical experts in their respective fields, we ensure that
            every action taken is aimed at improving your quality of life.
            Through an approach based on empathy and extensive medical
            knowledge, we listen to and understand your health needs, ensuring
            comfort throughout the treatment process.
          </p>
          <p className="text-justify  tracking-widest">
            At our healthcare center, you will find the latest medical
            technology combined with a meticulous attention to every detail. We
            offer a wide range of medical services with recognized quality,
            ensuring you receive the right solutions based on your needs. From
            routine checkups to specialized care, we are here to provide the
            best for your health.
          </p>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import HeroMiniCard from './HeroMiniCard';

export default function AboutUs() {
  return (
    <div className="bg-white pt-12 relative w-full lg:w-9/12 mx-auto">
      <HeroMiniCard />
      <h2 className="uppercase text-blue-500 font-bold text-lg lg:text-2xl tracking-widest lg:tracking-[.25em] text-center lg:pt-16">
        Rumah Sakit FASILKOM
      </h2>
      <h1 className=" text-blue-900 text-3xl font-bold lg:text-4xl tracking-wider py-4 lg:tracking-widest text-center">
        A Great Place to Receive Care
      </h1>
      <p className="text-black text-lg text-justify mx-10 lg:text-center lg:w-3/6 lg:mx-auto md:tracking-widest">
        Welcome!, this place is where convenience and care meet. Our easy-to-use
        online booking system lets you schedule appointments with specialist
        doctors based on your needs, at a time that fits your schedule. We’re
        dedicated to providing accessible, high-quality healthcare tailored to
        you.
      </p>
      <div className="flex items-center justify-center gap-4 lg:py-6">
        <p className="text-blue-400 text-center text-lg py-4">Learn More</p>
        <FaArrowRightLong className="text-blue-400" />
      </div>
    </div>
  );
}

import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import HeroMiniCard from './HeroMiniCard';

export default function OurServices() {
  return (
    <div className="bg-white py-12 relative w-full lg:w-9/12 mx-auto">
      <HeroMiniCard />
      <h2 className="uppercase text-blue-500 font-bold text-lg lg:text-2xl tracking-widest lg:tracking-[.25em] text-center lg:pt-16">
        Welcome to MEDDICAL
      </h2>
      <h1 className=" text-blue-900 text-3xl font-bold lg:text-4xl tracking-wider py-4 lg:tracking-widest text-center">
        A Great Place to Receive Care
      </h1>
      <p className="text-black text-lg text-justify mx-10 lg:text-center lg:w-3/6 lg:mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        Placerat Scelerisque tortor ornare ornare. Convallis felis vitae tortor
        augue. Velit nascetur proin massa in. Consequat faucibus prottitor enim
        e.
      </p>
      <div className="flex items-center justify-center gap-4 lg:py-6">
        <p className="text-blue-400 text-center text-lg py-4">Learn More</p>
        <FaArrowRightLong className="text-blue-400" />
      </div>
    </div>
  );
}

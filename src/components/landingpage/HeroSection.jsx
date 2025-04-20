import React from 'react';
import HeroImage from '../../../public/index/heroImage.jpg';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="max-w-screen relative flex select-none items-center justify-center">
      <div className="relative flex h-[500px] w-screen justify-center overflow-hidden md:h-[600px] lg:h-[700px] xl:h-[800px]">
        <Image className="object-cover" fill src={HeroImage} alt="heroImage" />
        <div className="absolute z-10 h-full w-full bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.00)_59%,_rgba(255,_255,_255,_0.29)_75%,_#ffffff_100%)]" />
        <div className="absolute flex flex-col items-center justify-center w-full h-full ">
          <h1 className="uppercase text-blue-500 font-bold text-xl">
            {' '}
            Caring for Life
          </h1>
          <h1 className="text-blue-900 text-3xl font-bold">Leading the Way</h1>
          <h1 className="text-blue-900 text-3xl font-bold">
            in Medical Excellence
          </h1>
          <button className="bg-blue-200 text-black font-semibold py-4 mt-8 px-6 rounded-full">
            Our Services
          </button>
        </div>
      </div>
    </section>
  );
}

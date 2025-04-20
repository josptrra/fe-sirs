import React from 'react';
import HeroImage from '../../../public/index/heroImage.jpg';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="max-w-screen relative flex select-none items-center justify-center">
      <div className="relative flex h-[500px] w-screen items-start overflow-hidden md:h-[600px] lg:h-[700px] xl:h-[850px]">
        <Image
          className="object-cover lg:object-top"
          fill
          src={HeroImage}
          alt="heroImage"
        />
        <div className="absolute h-full w-full">
          <div className="w-full lg:w-9/12 flex flex-col items-center justify-center mx-auto h-full pt-32 lg:pt-0 lg:items-start">
            <h1 className="uppercase text-blue-500 font-bold text-xl lg:text-2xl tracking-widest lg:tracking-[.25em] lg:leading-20">
              {' '}
              Caring for Life
            </h1>
            <h1 className="text-blue-900 text-3xl font-bold lg:text-5xl tracking-wider lg:tracking-widest lg:leading-15">
              Leading the <span className="text-white">Way</span>
            </h1>
            <h1 className="text-blue-900 text-3xl font-bold lg:text-5xl tracking-wider lg:tracking-widest lg:leading-15">
              in Medical <span className="text-white">Excellence</span>
            </h1>
            <button className="bg-blue-200 text-black font-semibold py-4 mt-8 px-8 rounded-full lg:tracking-wider lg:px-10 lg:font-bold lg:text-lg">
              Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

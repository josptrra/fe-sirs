import React from 'react';
import Image from 'next/image';
import Logo from '@/../public/index/LogoRod.png';
import Link from 'next/link';

export default function LogoRumahSakit() {
  return (
    <Link
      href="/"
      className="mb-4 flex w-full flex-row items-center justify-center p-2 2xl:w-[45%] 2xl:border-r-2"
    >
      <div className="mr-2 w-[50px]">
        <Image width={50} className="2xl:w-full" src={Logo} alt="Aeclypius" />
      </div>
      <div className="flex h-max flex-col items-start justify-center">
        <h1 className="font-color-primary mb-0 text-[26px] font-bold leading-7 2xl:text-[32px]">
          Rumah Sakit
        </h1>
        <h1 className="text-nowrap text-[18px] font-medium leading-5 text-black 2xl:text-[26px]">
          FASILKOM
        </h1>
      </div>
    </Link>
  );
}

import Image from 'next/image';
import Logo from '@/../public/index/LogoRod.png';
import Link from 'next/link';

export default function LogoNavbar() {
  return (
    <Link
      className="bg-nav-pattern flex h-9 w-9 select-none flex-row items-center gap-1 bg-repeat lg:h-max lg:w-max"
      href="/"
    >
      <Image width={40} src={Logo} alt="logo" />
      <div className="ml-1 flex w-32 flex-col items-start justify-center lg:ml-2 lg:h-fit lg:w-max">
        <h1 className="font-color-primary mb-0 text-xl font-bold leading-5 lg:text-[25px] lg:font-bold lg:leading-7">
          Rumah Sakit
        </h1>
        <h1 className="text-nowrap text-[14px] font-medium leading-3 text-black lg:text-[18px] lg:leading-3">
          FASILKOM
        </h1>
      </div>
    </Link>
  );
}

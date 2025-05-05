import React from 'react';
import Link from 'next/link';
import LogoRumahSakit from '../ui/LogoRumahSakit';

export default function Login() {
  return (
    <div className="h-screen w-full bg-white bg-[url(/index/bg-navbar.png)]">
      <div className="flex min-h-screen w-full items-center justify-center">
        <div className="transisi flex w-11/12 flex-col rounded-xl bg-white p-4 hover:shadow-2xl md:w-8/12 md:p-8 lg:w-5/12 2xl:w-7/12 2xl:flex-row 2xl:py-16 2xl:pr-12">
          <LogoRumahSakit />
          <div className="flex flex-col border-t-[1px] p-2 text-center 2xl:w-1/2 2xl:border-t-0 2xl:py-16 2xl:pl-16 2xl:pr-12 2xl:pt-8 2xl:text-start">
            <h1 className="mt-3 text-2xl font-bold md:mt-3 2xl:mt-0 2xl:text-3xl">
              Login Akun Layanan
            </h1>
            <p className="mb-4 mt-1 text-[12px] text-gray-400 2xl:text-[14px]">
              Autentikasi Diperlukan untuk Masuk ke Layanan!
            </p>
            <form>
              <input
                type="email"
                id="email"
                className="mt-2 w-full border p-2 py-3 text-sm outline-none 2xl:text-base"
                placeholder="Masukkan email anda"
              />
              <input
                type="password"
                id="password"
                className="mt-2 w-full border p-2 py-3 text-sm outline-none 2xl:text-base"
                placeholder="Masukkan sandi anda"
              />
              <button className="bg-blue-900 mt-6 w-full border py-3 text-center font-bold text-white">
                Masuk
              </button>
            </form>
            <Link
              href="/register"
              className="my-3 mb-1 w-full border-2 border-[#28166F] py-[10px] text-center font-bold text-black transition-all duration-200 ease-out hover:border-gray-800 hover:bg-[linear-gradient(121deg,_#01458e_7.76%,_#29166f_99.85%)] hover:text-white"
            >
              Registrasi
            </Link>
            <span className="text-center text-[12px] text-gray-400 2xl:mt-4 2xl:text-[14px]">
              Lupa kata sandi?{' '}
              <Link href="" className="font-semibold hover:text-[#28166F]">
                Klik disini!
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

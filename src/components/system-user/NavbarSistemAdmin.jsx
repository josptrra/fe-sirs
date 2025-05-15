'use client';

import React from 'react';
import LogoNavbar from './LogoNavbar';
import NavbarSistemList from './NavbarSistemList';
import NavbarSistemHead from './NavbarSistemHead';
import Link from 'next/link';

export default function NavbarSistemAdmin() {
  return (
    <div className="flex w-full flex-row items-center justify-between bg-[url(/index/bg-navbar.png)] px-4 py-[20px] lg:flex-col lg:items-start lg:bg-none">
      <LogoNavbar />
      <ul className="my-8 hidden w-full flex-col lg:flex">
        <NavbarSistemList NavList="Beranda" href="/admin527145" />
        <NavbarSistemHead NavHead="Manajemen Sistem" />
        <NavbarSistemList
          NavList="Daftar Pengguna "
          href="/admin527145/pengguna"
        />
        <NavbarSistemList
          NavList="Regis Akun Dokter"
          href="/admin527145/daftarDokter"
        />
        <NavbarSistemHead NavHead="Data Sistem" />
        <NavbarSistemList
          NavList="Data Pemeriksaan"
          href="/admin527145/datapemeriksaan"
        />
        <Link
          className="w-full rounded-lg px-6 py-3 text-start text-sm transition-all duration-200 ease-in-out hover:bg-blue-100 lg:text-base"
          href="/login"
        >
          Keluar Akun
        </Link>
      </ul>
    </div>
  );
}

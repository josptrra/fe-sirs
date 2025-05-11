'use client';

import React from 'react';
import LogoNavbar from './LogoNavbar';
import NavbarSistemList from './NavbarSistemList';
import NavbarSistemHead from './NavbarSistemHead';
import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { LogoutUser } from '@/services/auth';

export default function NavbarSistem() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate: logout, isLoading: isLogouting } = useMutation({
    mutationFn: LogoutUser,
    onSuccess: () => {
      router.push('/login');
      queryClient.removeQueries();
    },
  });
  return (
    <div className="flex w-full flex-row items-center justify-between bg-[url(/index/bg-navbar.png)] px-4 py-[20px] lg:flex-col lg:items-start lg:bg-none">
      <LogoNavbar />
      <ul className="my-8 hidden w-full flex-col lg:flex">
        <NavbarSistemList NavList="Beranda" href="/dashboard" />
        <NavbarSistemHead NavHead="Layanan Utama" />
        <NavbarSistemList NavList="Buat Janji Temu" href="/janjitemu" />
        <NavbarSistemList NavList="Riwayat Pengobatan" href="/riwayatmedis" />
        <NavbarSistemHead NavHead="Akun" />
        <button
          className="w-full rounded-lg px-6 py-3 text-start text-sm transition-all duration-200 ease-in-out hover:bg-blue-100 lg:text-base"
          onClick={() => logout()}
        >
          Keluar Akun
        </button>
      </ul>
    </div>
  );
}

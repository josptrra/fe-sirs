'use client';

import React from 'react';
import { GetUserById } from '@/services/getUserData';
import { useQuery } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';

export default function HeaderDoctor() {
  const pathname = usePathname();

  let title = '';
  if (pathname.includes('doctor')) title = 'Beranda';
  if (pathname.includes('doctor/periksa'))
    title = 'Pengisian Form Pemeriksaan Pasien';
  if (pathname.includes('doctor/riwayatpasien')) title = 'Riwayat Pasien';

  const { isLoading: isLoadingUser, data: user } = useQuery({
    queryKey: ['dataUser'],
    queryFn: () => GetUserById(),
    refetchOnWindowFocus: true,
  });

  return (
    <div className="hidden w-full items-center justify-between py-3 md:flex">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <div className="flex justify-end gap-3">
        {isLoadingUser ? (
          <span>Loading...</span>
        ) : (
          <span>Selamat Datang, Dokter {user?.nama || 'User'}</span>
        )}
      </div>
    </div>
  );
}

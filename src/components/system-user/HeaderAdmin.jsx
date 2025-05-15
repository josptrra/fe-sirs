'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

export default function HeaderAdmin() {
  const pathname = usePathname();

  let title = '';
  if (pathname.includes('/admin527145')) title = 'Beranda';
  if (pathname.includes('/admin527145/pengguna'))
    title = 'Daftar Pengguna Sistem';
  if (pathname.includes('/admin527145/daftarDokter'))
    title = 'Pendaftaran Akun Dokter';
  if (pathname.includes('/admin527145/datapemeriksaan'))
    title = 'Data Riwayat Pemeriksaan Sistem';

  return (
    <div className="hidden w-full items-center justify-between py-3 md:flex">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <div className="flex justify-end gap-3">
        <span>Selamat Datang, Admin!</span>
      </div>
    </div>
  );
}

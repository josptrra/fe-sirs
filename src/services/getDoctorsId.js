'use server';

import { cookies } from 'next/headers';

export async function getIdDokterFromCookies() {
  try {
    const cookieStore = await cookies();
    const idDokter = cookieStore.get('id')?.value;

    if (!idDokter) {
      throw new Error('ID Dokter tidak ditemukan di cookies');
    }

    return idDokter;
  } catch (err) {
    console.error('Error saat mengambil ID Dokter dari cookies:', err);
    throw new Error('Gagal mengambil ID Dokter dari cookies');
  }
}

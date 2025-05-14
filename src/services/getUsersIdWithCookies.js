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

export async function getIdPasienFromCookies() {
  try {
    const cookieStore = await cookies();
    const idPasien = cookieStore.get('id')?.value;

    if (!idPasien) {
      throw new Error('ID Pasien tidak ditemukan di cookies');
    }

    return idPasien;
  } catch (err) {
    console.error('Error saat mengambil ID Pasien dari cookies:', err);
    throw new Error('Gagal mengambil ID Pasien dari cookies');
  }
}

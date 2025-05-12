'use server';

import { apiurl } from '@/lib/globalvar';
import axios from 'axios';
import { cookies } from 'next/headers';

export async function PostFormJanjiTemu(data) {
  try {
    // Menunggu hasil cookies() sebelum mengakses idPasien
    const cookieStore = await cookies();
    const idPasien = cookieStore.get('id')?.value;

    console.log('ID Pasien dari cookies:', idPasien);

    if (!idPasien) {
      console.error('ID Pasien tidak ditemukan di cookies');
      throw new Error('ID Pasien tidak ditemukan');
    }

    const requestData = {
      idPasien: idPasien,
      namaPasien: data.namaPasien,
      nik: data.nik,
      umur: data.umur,
      alamat: data.alamat,
      noHp: data.noHp,
      idDokter: data.idDokter,
      keluhan: data.keluhan,
      tanggal: data.tanggal,
    };
    const response = await axios.post(`${apiurl}/janjiTemu`, requestData);

    if (response.status === 200) {
      console.log('Janji temu berhasil dibuat:', response.data);
      return response.data;
    } else {
      console.error('Error membuat janji temu:', response.statusText);
      return null;
    }
  } catch (error) {
    console.error('Terjadi kesalahan saat mengirim form janji temu:', error);
    return null;
  }
}

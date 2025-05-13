'use server';

import axios from 'axios';
import { apiurl } from '@/lib/globalvar';

export async function PostFormPemeriksaan(data, janjiTemuId) {
  try {
    const requestData = {
      idPasien: data.idPasien,
      namaPasien: data.namaPasien,
      nik: data.nik,
      umur: data.umur,
      alamat: data.alamat,
      noHp: data.noHp,
      idDokter: data.idDokter,
      keluhan: data.keluhan,
      tanggal: data.tanggal,
      analisa: data.analisa,
      resepObat: data.resepObat,
    };

    // Kirim data pemeriksaan
    const response = await axios.post(`${apiurl}/pemeriksaan`, requestData);

    if (response.status === 201) {
      // Pastikan statusnya 201 untuk Created
      console.log('Pemeriksaan berhasil dibuat:', response.data);

      // Setelah pemeriksaan berhasil, hapus janji temu
      const deleteResponse = await deleteJanjiTemu(janjiTemuId);

      // Cek apakah penghapusan janji temu berhasil
      if (deleteResponse.status === 200) {
        console.log('Janji temu berhasil dihapus');
      } else {
        console.error('Gagal menghapus janji temu:', deleteResponse);
        throw new Error('Gagal menghapus janji temu');
      }

      return response.data;
    } else {
      console.error('Gagal mengirim pemeriksaan:', response.statusText);
      return null;
    }
  } catch (error) {
    console.error('Terjadi kesalahan saat mengirim data pemeriksaan:', error);
    throw new Error('Gagal mengirim data pemeriksaan');
  }
}

export const deleteJanjiTemu = async (id) => {
  try {
    const response = await axios.delete(`${apiurl}/janjiTemu/${id}`);
    console.log('Delete Response:', response);
    return response;
  } catch (error) {
    console.error('Error saat menghapus janji temu:', error);
    throw new Error('Gagal menghapus janji temu');
  }
};

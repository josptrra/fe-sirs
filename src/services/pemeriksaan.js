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

    const response = await axios.post(`${apiurl}/pemeriksaan`, requestData);

    if (response.status === 201) {
      console.log('Pemeriksaan berhasil dibuat:', response.data);

      const deleteResponse = await deleteJanjiTemu(janjiTemuId);
      if (deleteResponse.status === 200) {
        console.log('Janji temu berhasil dihapus');
      } else {
        console.error('Gagal menghapus janji temu:', deleteResponse);
        throw new Error('Gagal menghapus janji temu');
      }

      return response.data;
    } else {
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

// export async function getPeriksasByDokter() {
//   try {
//     // const cookieStore = await cookies();
//     // const idDokter = cookieStore.get('id');

//     // if (!idDokter) {
//     //   throw new Error('ID Dokter tidak ditemukan di cookies');
//     const response = await axios.get(apiurl + `/doctors`);
//     return response.data.data;
//     }

//     // const response = await axios.get(`${apiurl}/pemeriksaan`);

//     // return response.data.data;
//   } catch (error) {
//     // console.error('Error saat mengambil data periksa:', err);
//     // throw new Error('Gagal mengambil periksa');
//     console.error('Failed to fetch doctors:', error);
//     throw error;
//   }
// }

export async function getPeriksas() {
  try {
    const response = await axios.get(apiurl + `/pemeriksaan`);
    return response.data.data;
  } catch (error) {
    console.error('Failed to fetch doctors:', error);
    throw error;
  }
}

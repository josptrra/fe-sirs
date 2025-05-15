'use server';

import { apiurl } from '@/lib/globalvar';
import axios from 'axios';
import { cookies } from 'next/headers';

export async function GetUserById() {
  try {
    const cookieStore = await cookies();
    const id = cookieStore.get('id')?.value;

    if (!id) {
      throw new Error('ID tidak ditemukan di cookies');
    }

    const response = await axios.get(`${apiurl}/users/${id}`);

    return response.data.data;
  } catch (err) {
    console.error('Error saat mengambil data pengguna:', err);
    throw new Error('Gagal mengambil data pengguna');
  }
}

export async function GetAllUsers() {
  try {
    const response = await axios.get(`${apiurl}/users`);

    if (response.data.status !== 'success') {
      throw new Error('Gagal mengambil data pengguna');
    }

    return response.data.data;
  } catch (err) {
    console.error('Error saat mengambil data pengguna:', err);
    throw new Error('Gagal mengambil data pengguna');
  }
}

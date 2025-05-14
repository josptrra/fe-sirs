'use server';

import { apiurl } from '@/lib/globalvar';
import axios from 'axios';

export async function getAllDoctors() {
  try {
    const response = await axios.get(apiurl + `/doctors`);
    return response.data.data;
  } catch (error) {
    console.error('Failed to fetch doctors:', error);
    throw error;
  }
}

export async function getDoctorNameById(idDokter) {
  try {
    const response = await axios.get(`${apiurl}/users/${idDokter}`);
    return response.data.data.nama;
  } catch (error) {
    console.error('Failed to fetch doctor name:', error);
    throw error;
  }
}

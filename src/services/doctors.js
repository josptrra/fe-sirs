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

export async function fetchPasienDokterHariIni() {
  try {
    const response = await fetch(apiurl + `/doctors/handlePasien`);
    const data = await response.json();

    if (response.ok && data.status === 'success') {
      return data.data;
    } else {
      console.error('Failed to fetch pasien data:', data.message);
      return [];
    }
  } catch (error) {
    console.error('Error fetching pasien data:', error);
    return [];
  }
}

export async function fetchPasienDokterBesok() {
  try {
    const response = await fetch(apiurl + `/doctors/handlePasienBesok`);
    const data = await response.json();

    if (response.ok && data.status === 'success') {
      return data.data;
    } else {
      console.error('Failed to fetch pasien data:', data.message);
      return [];
    }
  } catch (error) {
    console.error('Error fetching pasien data:', error);
    return [];
  }
}

export async function fetchPasienDokterLusa() {
  try {
    const response = await fetch(apiurl + `/doctors/handlePasienLusa`);
    const data = await response.json();

    if (response.ok && data.status === 'success') {
      return data.data;
    } else {
      console.error('Failed to fetch pasien data:', data.message);
      return [];
    }
  } catch (error) {
    console.error('Error fetching pasien data:', error);
    return [];
  }
}

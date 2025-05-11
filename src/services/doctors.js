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

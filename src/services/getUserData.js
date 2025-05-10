'use server';

import { apiurl } from '@/lib/globalvar';
import axios from 'axios';
import { cookies } from 'next/headers';

export async function GetUserById() {
  try {
    const id = cookies().get('id').value;
    const response = await axios.get(apiurl + `/users/${id}`);

    return response.data.data;
  } catch (err) {
    throw new Error();
  }
}

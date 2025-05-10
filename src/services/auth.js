'use server';

import { apiurl } from '@/lib/globalvar';
import axios from 'axios';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function registerUser(data) {
  try {
    const response = await axios.post(`${apiurl}/users/signup`, {
      name: data.name,
      email: data.email,
      password: data.password,
      role: 'pasien',
    });

    return response.data;
  } catch (err) {
    console.log(err);
    throw new Error('Registration failed');
  }
}

export async function loginUser(data) {
  try {
    const response = await axios.post(`${apiurl}/users/login`, {
      email: data.email,
      password: data.password,
    });

    const token = response.data.token;
    cookies().set('jwt', token);

    return response.data;
  } catch (err) {
    console.log(err);
    throw new Error('Login failed');
  }
}

export async function logoutUser() {
  cookies().delete('jwt');
  redirect('/login');
}

'use server';

import { apiurl } from '@/lib/globalvar';
import axios from 'axios';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function RegisterUser(data) {
  try {
    const response = await axios.post(`${apiurl}/users/signup`, {
      email: data.email,
      password: data.password,
      nama: data.nama,
    });

    return response.data;
  } catch (err) {
    console.log(err);
    throw new Error('Registration failed');
  }
}

export async function LoginUser(data) {
  try {
    const response = await axios.post(`${apiurl}/users/login`, {
      email: data.email,
      password: data.password,
    });

    const token = response.data.token;
    const userId = response.data.user._id;
    cookies().set('jwt', token);
    (await cookies()).set('id', userId);

    return response.data;
  } catch (err) {
    console.log(err);
    throw new Error('Login failed');
  }
}

export async function LogoutUser() {
  cookies().delete('jwt');
  cookies().delete('id');
  redirect('/login');
}

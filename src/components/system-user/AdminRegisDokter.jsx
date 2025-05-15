'use client';

import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { RegisterDokter } from '@/services/auth';
import ButtonAuth from '../auth/ButtonAuth';

export default function AdminRegisDokter() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const queryClient = useQueryClient();

  function onSubmit(data) {
    console.log('onSubmit called with data:', data); // Debugging log
    setIsLoading(true);
    regis(data);
  }

  const { mutate: regis } = useMutation({
    mutationFn: (data) => RegisterDokter(data),
    onSuccess: (response) => {
      console.log('Registration success:', response); // Debugging log
      queryClient.setQueryData(['user'], response);
      toast.success('Akun dokter berhasil dibuat!');
      setIsLoading(false);
      reset(); // Reset form setelah sukses
    },
    onError: (error) => {
      console.error('Registration error:', error); // Debugging log
      toast.error('Registrasi akun gagal! Periksa kembali data dokter.');
      setIsLoading(false);
    },
  });

  function onError(errors) {
    console.log('Form errors:', errors); // Debugging log
    if (errors.password?.type === 'minLength') {
      toast.error(errors.password.message);
    }
    if (errors.nama) {
      toast.error(errors.nama.message);
    }
    if (errors.email) {
      toast.error(errors.email.message);
    }
    if (errors.spesialisasi) {
      toast.error(errors.spesialisasi.message);
    }
  }

  return (
    <div>
      <h1 className="text-center text-xl font-semibold pb-4">
        Pendaftaran Akun Dokter
      </h1>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <input
          id="username"
          type="text"
          className="mt-2 w-full border p-2 py-3 text-sm outline-none 2xl:text-base"
          placeholder="Masukkan nama lengkap dokter"
          {...register('nama', {
            required: 'Nama lengkap dokter diperlukan!',
          })}
        />
        <p className="text-red-500">{errors.nama?.message}</p>

        <input
          id="email"
          type="email"
          className="mt-2 w-full border p-2 py-3 text-sm outline-none 2xl:text-base"
          placeholder="Masukkan email dokter"
          {...register('email', {
            required: 'Email wajib diisi!',
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Format email tidak valid',
            },
          })}
        />
        <p className="text-red-500">{errors.email?.message}</p>

        <input
          id="password"
          type="password"
          className="mt-2 w-full border p-2 py-3 text-sm outline-none 2xl:text-base"
          placeholder="Masukkan password dokter"
          {...register('password', {
            required: 'Kata sandi wajib diisi!',
            minLength: {
              value: 7,
              message: 'Kata sandi minimal 7 digit',
            },
          })}
        />
        <p className="text-red-500">{errors.password?.message}</p>

        <input
          id="spesialisasi"
          type="text"
          className="mt-2 w-full border p-2 py-3 text-sm outline-none 2xl:text-base"
          placeholder="Masukkan bidang spesialis dokter"
          {...register('spesialisasi', {
            required: 'Spesialisasi wajib diisi!',
          })}
        />
        <p className="text-red-500">{errors.spesialisasi?.message}</p>

        <ButtonAuth title="Registrasi" isLoading={isLoading} />
      </form>
    </div>
  );
}

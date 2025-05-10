'use client';

import React from 'react';
import Link from 'next/link';
import LogoRumahSakit from '../ui/LogoRumahSakit';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { registerUser } from '@/services/auth';
import ButtonAuth from './ButtonAuth';

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const queryClient = useQueryClient();

  function onSubmit(data) {
    setIsLoading(true);
    regis(data);
  }

  const { mutate: regis } = useMutation({
    mutationFn: (data) => registerUser(data),
    onSuccess: (response) => {
      queryClient.setQueryData(['user'], response);
      toast.success('Akun berhasil dibuat, silahkan kembali ke halaman login');
      setIsLoading(false);
    },
    onError: () => {
      toast.error('Registrasi akun gagal! Periksa kembali data anda.');
      reset();
      setIsLoading(false);
    },
  });

  function onError(errors) {
    if (errors.password?.type === 'minLength') {
      toast.error(errors.password.message);
    }
  }

  return (
    <div className="h-full w-full bg-white bg-[url(/index/bg-navbar.png)]">
      <div className="flex min-h-screen w-full items-center justify-center py-0 lg:py-10 xl:py-0">
        <div className="transisi flex w-11/12 flex-col rounded-xl bg-white p-4 hover:shadow-2xl md:w-8/12 md:p-8 lg:w-5/12 2xl:w-7/12 2xl:flex-row 2xl:py-16 2xl:pr-12">
          <LogoRumahSakit />
          <div className="flex flex-col border-t-[1px] p-2 text-center 2xl:w-1/2 2xl:border-t-0 2xl:py-16 2xl:pl-16 2xl:pr-12 2xl:pt-8 2xl:text-start">
            <h1 className="mt-3 text-2xl font-bold md:mt-3 2xl:mt-0 2xl:text-3xl">
              Register Akun Layanan
            </h1>
            <p className="mb-4 mt-1 text-[12px] text-gray-400 2xl:text-[14px]">
              Persetujuan registrasi akun akan memerlukan beberapa waktu!
            </p>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
              <input
                id="username"
                type="text"
                className="mt-2 w-full border p-2 py-3 text-sm outline-none 2xl:text-base"
                placeholder="Masukkan nama lengkap anda"
                {...register('name', {
                  required: 'Nama lengkap anda diperlukan!',
                })}
              />
              <input
                id="email"
                type="email"
                className="mt-2 w-full border p-2 py-3 text-sm outline-none 2xl:text-base"
                placeholder="Masukkan email anda"
                {...register('email', {
                  required: 'Email wajib diisi!',
                })}
              />
              <input
                id="password"
                type="password"
                className="mt-2 w-full border p-2 py-3 text-sm outline-none 2xl:text-base"
                placeholder="Masukkan sandi anda"
                {...register('password', {
                  required: 'Kata sandi wajib diisi!',
                  minLength: {
                    value: 7,
                    message: 'Kata sandi minimal 7 digit',
                  },
                })}
              />
              <ButtonAuth title="Registrasi" isLoading={isLoading} />
            </form>
            <span className="text-center text-[12px] text-gray-400 2xl:mt-2 2xl:text-[14px]">
              Sudah punya akun?{' '}
              <Link
                href="/login"
                className="font-semibold hover:text-[#28166F]"
              >
                Masuk disini!
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

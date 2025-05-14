'use client';

import React, { useState } from 'react';
import FormCheckbox from '@/components/system-user/FormCheckbox';
import FormOrderedList from '@/components/system-user/FormOrderedList';
import FormSection from '@/components/system-user/FormSection';
import InputFormSistem from '@/components/system-user/InputFormSistem';
import ButtonSistem from '@/components/ui/ButtonSistem';
import { FaUserDoctor } from 'react-icons/fa6';
import { useQuery } from '@tanstack/react-query';
import { getAllDoctors } from '@/services/doctors';
import { PostFormJanjiTemu } from '@/services/janjiTemu';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { getDateToday } from '@/lib/indoDate';

export default function JanjiTemu() {
  const { isLoading: isLoadingDoctor, data: doctors } = useQuery({
    queryKey: ['dataDokter'],
    queryFn: () => getAllDoctors(),
  });

  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, reset, setValue } = useForm();

  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const today = new Date();
  const localDate = today.toLocaleDateString('en-CA');

  function onSubmit(data) {
    setIsLoading(true);
    console.log(data);
    postJanjiTemu(data);
  }

  const { mutate: postJanjiTemu } = useMutation({
    mutationFn: (data) => PostFormJanjiTemu(data),
    onSuccess: (response) => {
      setIsLoading(false);
      toast.success(
        'Janji temu dengan dokter telah dibuat! Halaman akan dimuat ulang',
        response
      );
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    },
    onError: () => {
      toast.error('Terjadi kesalahan, coba lagi!');
      setIsLoading(false);
      reset();
    },
  });

  const handleDoctorSelect = (dokter) => {
    setSelectedDoctor(dokter._id);
    setValue('idDokter', dokter._id);
  };

  return (
    <>
      <h1 className="uppercase text-center text-2xl font-semibold">
        Buat Janji Temu Bersama Dokter Spesialis
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormSection title="Form Kelengkapan Data Pasien">
          <InputFormSistem title="Nama Lengkap Pasien" required>
            <input
              className="input-form-style"
              placeholder="Masukkan nama lengkap pasien!"
              id="namaPasien"
              {...register('namaPasien', {
                required: 'Masukkan nama lengkap pasien!',
              })}
            />
          </InputFormSistem>
          <InputFormSistem title="NIK" required>
            <input
              className="input-form-style"
              placeholder="Masukkan NIK Anda"
              id="nik"
              {...register('nik', { required: 'Masukkan NIK Anda!' })}
            />
          </InputFormSistem>
          <InputFormSistem title="Umur" required>
            <input
              className="input-form-style"
              placeholder="Masukkan umur pasien!"
              id="umur"
              {...register('umur', { required: 'Masukkan umur pasien!' })}
            />
          </InputFormSistem>
          <InputFormSistem title="Alamat" required>
            <input
              className="input-form-style"
              placeholder="Masukkan alamat pasien!"
              id="alamat"
              {...register('alamat', { required: 'Masukkan alamat pasien!' })}
            />
          </InputFormSistem>
          <InputFormSistem title="Telepon/No HP" required>
            <input
              className="input-form-style"
              placeholder="Masukkan nomor telepon pasien!"
              id="noHp"
              {...register('noHp', {
                required: 'Masukkan nomor telepon pasien!',
              })}
            />
          </InputFormSistem>
        </FormSection>

        <FormSection title="Pemilihan Dokter Spesialis & Keluhan Penyakit">
          <InputFormSistem title="Pilih Dokter Spesialis Anda" required>
            <div className="flex flex-wrap py-4 space-x-4">
              {isLoadingDoctor ? (
                <p>Loading doctors...</p>
              ) : (
                doctors.map((dokter) => (
                  <div
                    key={dokter._id}
                    className={`flex items-center justify-center gap-2 w-fit hover:bg-blue-900 rounded-md transisi hover:text-white px-3 py-2 border ${
                      selectedDoctor === dokter._id
                        ? 'bg-blue-900 text-white'
                        : 'border-blue-900'
                    }`}
                    onClick={() => handleDoctorSelect(dokter)} // Select doctor
                  >
                    <FaUserDoctor />
                    <h1>
                      {dokter.nama} - {dokter.dokterInfo.spesialisasi}
                    </h1>
                  </div>
                ))
              )}
            </div>
          </InputFormSistem>
          <InputFormSistem title="Tanggal Temu Dokter" required>
            <input
              className="mb-3 mt-2 w-fit rounded-md border px-3 py-[12px] text-xs md:py-[10px] md:text-sm xl:text-base"
              type="date"
              id="tanggal"
              // min={getDateToday()}
              // min={new Date().toISOString().split('T')[0]}

              min={localDate}
              {...register('tanggal', {
                required: 'Pilih tanggal janji temu!',
              })}
            />
          </InputFormSistem>
          <InputFormSistem title="Deskripsi Keluhan Penyakit">
            <input
              className="input-form-style"
              placeholder="Deskripsikan Keluhan Anda"
              id="keluhan"
              {...register('keluhan')}
            />
          </InputFormSistem>
        </FormSection>

        <FormSection title="Lingkup Kesepakatan">
          <ul className="list-decimal px-4 md:px-12">
            <FormOrderedList isi="Pengguna dapat memilih dokter dan jadwal temu yang tersedia, serta mengonfirmasi atau membatalkan janji temu sesuai ketentuan;" />
            <FormOrderedList isi="Akses hanya diberikan kepada pengguna yang terdaftar dan memiliki data yang valid untuk melakukan penjadwalan;" />
            <FormOrderedList isi="Pengguna bertanggung jawab memastikan informasi yang diberikan akurat dan mematuhi prosedur pembatalan atau perubahan jadwal yang berlaku;" />
            <FormOrderedList isi="Sistem menjamin kerahasiaan data pengguna dan hanya digunakan untuk tujuan penjadwalan janji temu dokter;" />
          </ul>
        </FormSection>

        <FormCheckbox title="Saya menyetujui kesepakatan diatas!">
          <input type="checkbox" className="input-checkbox-style" />
        </FormCheckbox>

        <ButtonSistem name="Buat janji" isLoading={isLoading} />
      </form>
    </>
  );
}

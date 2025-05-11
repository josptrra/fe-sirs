'use client';

import FormCheckbox from '@/components/system-user/FormCheckbox';
import { getAllDoctors } from '@/services/doctors';
import FormOrderedList from '@/components/system-user/FormOrderedList';
import FormSection from '@/components/system-user/FormSection';
import InputFormSistem from '@/components/system-user/InputFormSistem';
import ButtonSistem from '@/components/ui/ButtonSistem';
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { FaUserDoctor } from 'react-icons/fa6';

export default function RootLayout({ children }) {
  const { isLoading: isLoadingDoctor, data: doctors } = useQuery({
    queryKey: ['dataDokter'],
    queryFn: () => getAllDoctors(),
  });
  return (
    <main>
      <h1 className="uppercase text-center text-2xl font-semibold">
        buat janji temu bersama dokter spesialis pilihan anda!
      </h1>
      <form>
        <FormSection title="Form Kelengkapan Data Pasien">
          <InputFormSistem title="Nama Lengkap Pasien" required>
            <input
              className="input-form-style"
              placeholder="Masukkan nama lengkap pasien!"
              id="namePasien"
            />
          </InputFormSistem>
          <InputFormSistem title="NIK" required>
            <input
              className="input-form-style"
              placeholder="Masukkan NIK Anda"
              id="nik"
            />
          </InputFormSistem>
          <InputFormSistem title="Umur" required>
            <input
              className="input-form-style"
              placeholder="Masukkan umur anda!"
              id="umurPasien"
            />
          </InputFormSistem>
          <InputFormSistem title="Alamat" required>
            <input
              className="input-form-style"
              placeholder="Masukkan Alamat Anda"
              id="alamatpasien"
            />
          </InputFormSistem>
          <InputFormSistem title="Telepon/No HP" required>
            <input
              className="input-form-style"
              placeholder="Masukkan Nomor Telepon"
              id="teleponpasien"
            />
          </InputFormSistem>
        </FormSection>

        <FormSection title="Pemilihan Dokter Spesialis & Keluhan Penyakit">
          <InputFormSistem title="Pilih Dokter Spesialis Anda" required>
            <div className="flex flex-wrap py-4">
              {doctors &&
                doctors.map((dokter) => (
                  <div
                    key={dokter._id}
                    className="flex items-center justify-center gap-2 w-fit hover:bg-blue-900 rounded-md transisi hover:text-white px-3 py-2 border border-blue-900"
                  >
                    <FaUserDoctor />
                    <h1>
                      {dokter.user.name} - {dokter.spesialisasi}
                    </h1>
                  </div>
                ))}
            </div>
          </InputFormSistem>
          <InputFormSistem title="Tanggal Temu Dokter" required>
            <input className="input-form-style" type="date" />
          </InputFormSistem>
          <InputFormSistem title="Deskripsi Keluhan Penyakit">
            <input
              className="input-form-style"
              placeholder="Deskripsikan Keluhan Anda"
              id="keluhan"
            />
          </InputFormSistem>
        </FormSection>

        <FormSection title="Lingkup Kesepakatan">
          <ul className="list-decimal px-4 md:px-12">
            <FormOrderedList isi="Pengguna dapat memilih dokter dan jadwal temu yang tersedia, serta mengonfirmasi atau membatalkan janji temu sesuai ketentuan.;" />
            <FormOrderedList isi="Akses hanya diberikan kepada pengguna yang terdaftar dan memiliki data yang valid untuk melakukan penjadwalan.;" />
            <FormOrderedList isi="Pengguna bertanggung jawab memastikan informasi yang diberikan akurat dan mematuhi prosedur pembatalan atau perubahan jadwal yang berlaku;" />
            <FormOrderedList isi="Sistem menjamin kerahasiaan data pengguna dan hanya digunakan untuk tujuan penjadwalan janji temu dokter;" />
          </ul>
        </FormSection>

        <FormCheckbox title="Saya menyetujui kesepakatan diatas!">
          <input type="checkbox" className="input-checkbox-style" />
        </FormCheckbox>

        {/* <ButtonSistem name="Ajukan Pengajuan" isLoading={loadings} /> */}
        <ButtonSistem name="Buat janji" />
      </form>
    </main>
  );
}

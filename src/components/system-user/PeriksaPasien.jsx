'use client';

import React, { useState } from 'react';
import { getJanjiTemuByDokter } from '@/services/janjiTemu';
import { useQuery } from '@tanstack/react-query';
import { getIdDokterFromCookies } from '@/services/getDoctorsId';
import { GetUserById } from '@/services/getUserData';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import ButtonSistem from '../ui/ButtonSistem';
import { DialogTitle } from '@radix-ui/react-dialog';
import { formatDateForInput } from '@/lib/dateUtils';
import { PostFormPemeriksaan } from '@/services/pemeriksaan';
import { deleteJanjiTemu } from '@/services/pemeriksaan';
import toast from 'react-hot-toast';

export default function PeriksaPasien() {
  const [data, setData] = useState([]);
  const [selectedJanjiTemu, setSelectedJanjiTemu] = useState(null);
  const [analisa, setAnalisa] = useState('');
  const [resepObat, setResepObat] = useState('');

  const { isLoading: isLoadingUser, data: user } = useQuery({
    queryKey: ['dataUser'],
    queryFn: () => GetUserById(),
  });

  const { isLoadingJanjiTemu: isLoadingJanjiTemus, data: janjiTemuData } =
    useQuery({
      queryKey: ['janjiTemu'],
      queryFn: getJanjiTemuByDokter,
    });

  React.useEffect(() => {
    const fetchIdDokterAndFilterData = async () => {
      try {
        const idDokter = await getIdDokterFromCookies();
        if (janjiTemuData) {
          const filteredData = janjiTemuData.filter(
            (item) => item.dokter.idDokter._id === idDokter
          );
          setData(filteredData);
        }
      } catch (err) {
        console.error('Error saat memfilter janji temu:', err);
      }
    };

    fetchIdDokterAndFilterData();
  }, [janjiTemuData]);

  const handleFormSubmit = async (event) => {
    event.preventDefault(); // Mencegah refresh halaman

    if (!selectedJanjiTemu) return;

    const formData = {
      idPasien: selectedJanjiTemu.pasien.idPasien._id,
      namaPasien: selectedJanjiTemu.pasien.namaPasien,
      nik: selectedJanjiTemu.pasien.nik,
      umur: selectedJanjiTemu.pasien.umur,
      alamat: selectedJanjiTemu.pasien.alamat,
      noHp: selectedJanjiTemu.pasien.noHp,
      idDokter: user._id,
      keluhan: selectedJanjiTemu.keluhan,
      tanggal: selectedJanjiTemu.tanggal,
      analisa,
      resepObat,
    };

    try {
      const response = await PostFormPemeriksaan(
        formData,
        selectedJanjiTemu._id
      );

      if (response && response.status === 201) {
        const deleteResponse = await deleteJanjiTemu(selectedJanjiTemu._id);

        if (deleteResponse && deleteResponse.status === 200) {
          console.log('Pemeriksaan berhasil dan janji temu dihapus');
        } else {
          console.error('Gagal menghapus janji temu:', deleteResponse);
        }
      } else {
        toast.success('Pemeriksaan berhasil, halaman akan dimuat ulang!');
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    } catch (error) {
      console.error('Error saat mengirim data pemeriksaan:', error);
    }
  };

  const today = new Date().toISOString().split('T')[0]; // format: 'YYYY-MM-DD'
  return (
    <div className="layanan-global-container">
      <div className="w-full rounded-xl bg-white px-8 md:rounded lg:px-4">
        <h1 className="pt-4 text-xl font-semibold">
          Daftar Pasien yang sedang menunggu anda!
        </h1>
        <div className="flex items-center gap-4 py-4">
          <p className="italic text-sm">notes!</p>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <button className="w-[30px] rounded-md p-1 font-bold text-white bg-blue-900">
                ...
              </button>
              <p className="italic text-sm">
                tombol ini artinya dokter bisa lanjut mengisi form pemeriksaan!
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <button className="w-[30px] rounded-md p-1 font-bold text-white bg-gray-400">
                ...
              </button>
              <p className="italic text-sm">
                tombol ini artinya disabled, ini karena janji temu yang dibuat
                pasien bukan untuk pemeriksaan hari ini.
              </p>
            </div>
          </div>
        </div>
        <div className="overflow-x-scroll pb-8 2xl:overflow-visible">
          <table className="table-container">
            <thead>
              <tr className="primary-color text-sm text-white">
                <th className="w-[3%] border-r border-gray-300 px-4 py-3">
                  No.
                </th>
                <th className="w-[15%] border-r border-gray-300 px-4 py-3">
                  Pasien Terdaftar
                </th>
                <th className="w-[15%] border-r border-gray-300 px-4 py-3">
                  NIK Pasien
                </th>
                <th className="w-[5%] border-r border-gray-300 px-4 py-3">
                  Umur
                </th>
                <th className="w-[15%] border-r border-gray-300 px-4 py-3">
                  Dokter Pemeriksa
                </th>
                <th className="w-[10%] border-r border-gray-300 px-4 py-2">
                  Tanggal
                </th>
                <th className="w-[25%] border-r border-gray-300 px-4 py-2">
                  Keluhan
                </th>
                <th className="w-[25%] border-r border-gray-300 px-4 py-2">
                  Form Periksa Pasien
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoadingJanjiTemus ? (
                <tr>
                  <td
                    colSpan={9}
                    className="border border-gray-300 py-5 text-center"
                  >
                    <p>Loading...</p>
                  </td>
                </tr>
              ) : data.length > 0 ? (
                data.map((e, index) => {
                  const isDisabled =
                    new Date(e.tanggal).toISOString().split('T')[0] !== today;

                  return (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'
                      } hover:bg-gray-200`}
                    >
                      <td className="border border-gray-300 px-4 py-2">
                        {index + 1}
                      </td>
                      <td className="td-default-table">
                        <p className="p-break-words">{e.pasien.namaPasien}</p>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {e.pasien.nik}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {e.pasien.umur}
                      </td>
                      <td className="td-default-table">
                        <p className="p-break-words">{user.nama}</p>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {new Date(e.tanggal).toLocaleDateString()}
                      </td>
                      <td className="td-default-table">
                        <p className="p-break-words">{e.keluhan}</p>
                      </td>
                      <td className="border border-gray-300 ">
                        <Dialog>
                          <DialogTrigger>
                            <div
                              className={`w-[30px] rounded-md p-1 font-bold text-white ${
                                isDisabled
                                  ? 'bg-gray-400 cursor-not-allowed'
                                  : 'bg-blue-900'
                              }`}
                              onClick={(e) => {
                                if (!isDisabled) {
                                  console.log('Selected Janji Temu ID:', e._id);
                                  setSelectedJanjiTemu(e);
                                }
                              }}
                            >
                              ...
                            </div>
                          </DialogTrigger>
                          <DialogContent className="w-full border-blue-900 border-[3px] flex flex-col justify-center">
                            <DialogTitle>Form Pemeriksaan</DialogTitle>
                            <form onSubmit={handleFormSubmit}>
                              <div className="w-full mb-2">
                                <h1 className="uppercase text-sm font-medium pb-2">
                                  Nama Pasien
                                </h1>
                                <input
                                  className="text-sm border py-2 px-3 font-light outline-none w-full"
                                  readOnly
                                  value={e.pasien.namaPasien}
                                />
                              </div>
                              <div className="w-full mb-2">
                                <h1 className="uppercase text-sm font-medium pb-2">
                                  NIK
                                </h1>
                                <input
                                  type="number"
                                  readOnly
                                  className="text-sm border py-2 px-3 font-light outline-none w-full"
                                  value={e.pasien.nik}
                                />
                              </div>
                              <div className="w-full mb-2">
                                <h1 className="uppercase text-sm font-medium pb-2">
                                  Umur Pasien
                                </h1>
                                <input
                                  readOnly
                                  className="text-sm border py-2 px-3 font-light outline-none w-full"
                                  value={e.pasien.umur}
                                />
                              </div>
                              <div className="w-full mb-2">
                                <h1 className="uppercase text-sm font-medium pb-2">
                                  Tanggal Periksa
                                </h1>
                                <input
                                  readOnly
                                  className="text-sm border py-2 px-3 font-light outline-none w-full"
                                  value={formatDateForInput(e.tanggal)}
                                />
                              </div>
                              <div className="w-full mb-2">
                                <h1 className="uppercase text-sm font-medium pb-2">
                                  Keluhan
                                </h1>
                                <input
                                  readOnly
                                  className="text-sm border py-2 px-3 font-light outline-none w-full"
                                  value={e.keluhan}
                                />
                              </div>
                              <div className="w-full mb-2">
                                <h1 className="uppercase text-sm font-medium pb-2">
                                  Hasil Diagnosa Pasien
                                </h1>
                                <input
                                  className="text-sm border py-2 px-3 font-light outline-none w-full"
                                  value={analisa}
                                  onChange={(e) => setAnalisa(e.target.value)}
                                />
                              </div>
                              <div className="w-full mb-2">
                                <h1 className="uppercase text-sm font-medium pb-2">
                                  Resep obat
                                </h1>
                                <input
                                  className="text-sm border py-2 px-3 font-light outline-none w-full"
                                  value={resepObat}
                                  onChange={(e) => setResepObat(e.target.value)}
                                />
                              </div>
                              <ButtonSistem name="Kirim data periksa" />
                            </form>
                          </DialogContent>
                        </Dialog>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={9} className="border border-gray-300 py-5">
                    <p>Belum ada pasien saat ini!</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

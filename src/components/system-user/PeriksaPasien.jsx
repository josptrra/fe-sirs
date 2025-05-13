'use client';

import React, { useState } from 'react';
import { getJanjiTemuByDokter } from '@/services/janjiTemu';
import { useQuery } from '@tanstack/react-query';
import { getIdDokterFromCookies } from '@/services/getDoctorsId';
import { GetUserById } from '@/services/getUserData';

export default function PeriksaPasien() {
  const [data, setData] = useState([]);

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

  if (isLoadingJanjiTemus) return <p>Loading...</p>;

  return (
    <div className="layanan-global-container">
      <div className="w-full rounded-xl bg-white px-8 md:rounded lg:px-4">
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
              {data.length > 0 ? (
                data.map((e, index) => (
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
                      {' '}
                      <button className="w-[30px] rounded-md bg-blue-900 p-1 font-bold text-white">
                        ...
                      </button>
                    </td>
                  </tr>
                ))
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

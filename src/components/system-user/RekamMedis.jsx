import { getDoctorNameById } from '@/services/doctors';
import { GetUserById } from '@/services/getUserData';
import { getIdPasienFromCookies } from '@/services/getUsersIdWithCookies';
import { getPeriksas } from '@/services/pemeriksaan';
import { useQuery } from '@tanstack/react-query';
import React, { useState, useEffect } from 'react';

export default function RekamMedis() {
  const [data, setData] = useState([]);
  const [dokterNames, setDokterNames] = useState({});

  const { isLoading: isLoadingUser, data: user } = useQuery({
    queryKey: ['dataUser'],
    queryFn: () => GetUserById(),
    refetchOnWindowFocus: true,
  });

  const { isLoadingPeriksa: isLoadingPeriksas, data: periksaData } = useQuery({
    queryKey: ['DataPeriksa'],
    queryFn: getPeriksas,
  });

  useEffect(() => {
    const fetchDoctorNames = async () => {
      if (periksaData) {
        const names = {};
        for (const item of periksaData) {
          if (item.dokter.idDokter) {
            try {
              const doctorName = await getDoctorNameById(item.dokter.idDokter);
              names[item.dokter.idDokter] = doctorName; // Simpan nama dokter
            } catch (error) {
              console.error(
                'Error fetching doctor name for idDokter:',
                item.dokter.idDokter
              );
            }
          }
        }
        setDokterNames(names); // Update state dengan nama dokter
      }
    };
    fetchDoctorNames();
  }, [periksaData]);

  useEffect(() => {
    const fetchidPasienAndFilterData = async () => {
      try {
        const idPasien = await getIdPasienFromCookies();
        if (periksaData && idPasien) {
          const filteredData = periksaData.filter(
            (item) => item.pasien.idPasien === idPasien
          );
          setData(filteredData);
        }
      } catch (err) {
        console.error('Error saat memfilter data pemeriksaan:', err);
      }
    };

    fetchidPasienAndFilterData();
  }, [periksaData]);

  if (isLoadingPeriksas) return <p>Loading...</p>;

  return (
    <div className="layanan-global-container">
      <div className="w-full rounded-xl bg-white px-8 md:rounded lg:px-4">
        <h1 className="py-4 text-xl font-semibold">
          Riwayat temu dengan dokter pilihan anda!
        </h1>
        <div className="overflow-x-scroll pb-8 2xl:overflow-visible">
          <table className="table-container">
            <thead>
              <tr className="primary-color text-sm text-white">
                <th className="w-[3%] border-r border-gray-300 px-4 py-3">
                  No.
                </th>
                <th className="w-[10%] border-r border-gray-300 px-4 py-3">
                  Pasien Terdaftar
                </th>
                <th className="w-[10%] border-r border-gray-300 px-4 py-3">
                  Dokter Pemeriksa
                </th>
                <th className="w-[10%] border-r border-gray-300 px-4 py-2">
                  Tanggal Periksa
                </th>
                <th className="w-[25%] border-r border-gray-300 px-4 py-2">
                  Keluhan
                </th>
                <th className="w-[25%] border-r border-gray-300 px-4 py-2">
                  Analisa
                </th>
                <th className="w-[25%] border-r border-gray-300 px-4 py-3">
                  Resep Obat
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
                      <p>{`Dr. ${dokterNames[e.dokter.idDokter] || '...'}`}</p>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {new Date(e.tanggal).toLocaleDateString()}
                    </td>
                    <td className="td-default-table">
                      <p className="p-break-words">{e.keluhan}</p>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <p>{e.analisa}</p>
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <p>{e.resepObat}</p>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="border border-gray-300 py-5">
                    <p>Belum ada riwayat pemeriksaan untuk dokter ini!</p>
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

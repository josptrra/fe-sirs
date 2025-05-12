import React, { useState } from 'react';

export default function RiwayatPasien() {
  const [data, setData] = useState([]);
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
                  Hasil Periksa
                </th>
                <th className="w-[15%] border-r border-gray-300 px-4 py-3">
                  Resep Obat
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.length > 0 ? (
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
                      <p className="p-break-words">{e.unitkerja}</p>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {formatDateTimeID(e.createdAt)}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {e.jenispengajuan}
                    </td>
                    <td className="td-default-table">
                      <p className="p-break-words">{e.namapenanggungjawab}</p>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {formatDateTimeID(e.waktupemroses)}
                    </td>
                    <td className="td-default-table">
                      <p className="p-break-words">{e.namaadminpemroses}</p>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <StatusLayanan type={e.status} />
                    </td>
                    <td className="border border-gray-300 px-4 py-2"> </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={9} className="border border-gray-300 py-5">
                    <p>Belum ada riwayat pengobatan untuk saat ini!</p>
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

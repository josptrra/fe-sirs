import { fetchPasienDokterHariIni, getAllDoctors } from '@/services/doctors';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaUserDoctor } from 'react-icons/fa6';

export default function DashboardPasien() {
  const { isLoading: isLoadingDoctor, data: doctors } = useQuery({
    queryKey: ['dataDokter'],
    queryFn: () => getAllDoctors(),
  });

  const { isLoading: isLoadingPasien, data: pasienHariIni } = useQuery({
    queryKey: ['pasienDokterHariIni'],
    queryFn: () => fetchPasienDokterHariIni(),
  });

  const dokterPasienCount = doctors?.map((dokter) => {
    const dokterPasien = pasienHariIni?.find(
      (item) => item.dokterId === dokter._id
    );

    return {
      ...dokter,
      jumlahPasien: dokterPasien ? dokterPasien.jumlahPasien : 0,
    };
  });
  return (
    <div>
      <h1>Antrian Dokter hari ini.</h1>
      <div className="flex flex-wrap py-4 space-x-4">
        {isLoadingDoctor || isLoadingPasien ? (
          <p>Loading...</p>
        ) : (
          dokterPasienCount?.map((dokter) => (
            <div
              key={dokter._id}
              className="flex flex-col border rounded-md border-2"
            >
              <div className="flex items-center justify-center gap-2 w-fit rounded-md transisi px-3 py-2">
                <FaUserDoctor />
                <h1>
                  {dokter.nama} - {dokter.dokterInfo.spesialisasi}
                </h1>
              </div>
              <div className="flex items-center justify-center bg-blue-900 text-white rounded-b-md">
                <h1>{dokter.jumlahPasien}</h1>
                <h1>/</h1>
                <h1>25</h1>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

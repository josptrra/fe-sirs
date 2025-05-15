import {
  fetchPasienDokterHariIni,
  fetchPasienDokterBesok,
  fetchPasienDokterLusa,
  getAllDoctors,
} from '@/services/doctors';
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

  const { isLoading: isLoadingPasienBesok, data: pasienBesok } = useQuery({
    queryKey: ['pasienDokterBesok'],
    queryFn: () => fetchPasienDokterBesok(),
  });

  const { isLoading: isLoadingPasienLusa, data: pasienLusa } = useQuery({
    queryKey: ['pasienDokterLusa'],
    queryFn: () => fetchPasienDokterLusa(),
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

  const dokterPasienCountBesok = doctors?.map((dokter) => {
    const dokterPasien = pasienBesok?.find(
      (item) => item.dokterId === dokter._id
    );

    return {
      ...dokter,
      jumlahPasien: dokterPasien ? dokterPasien.jumlahPasien : 0,
    };
  });

  const dokterPasienCountLusa = doctors?.map((dokter) => {
    const dokterPasien = pasienLusa?.find(
      (item) => item.dokterId === dokter._id
    );

    return {
      ...dokter,
      jumlahPasien: dokterPasien ? dokterPasien.jumlahPasien : 0,
    };
  });

  const today = new Date();
  const localDate = today.toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const localTomorrowDate = tomorrow.toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  const theDayAfterTomorrow = new Date(today);
  theDayAfterTomorrow.setDate(today.getDate() + 2);
  const localTheDayAfterTomorrow = theDayAfterTomorrow.toLocaleDateString(
    'id-ID',
    {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }
  );

  return (
    <div>
      <div>
        <h1 className="text-lg font-semibold">
          Jumlah Antrian Dokter hari ini: {localDate}
        </h1>
        <div className="flex flex-wrap py-4 gap-6">
          {isLoadingDoctor || isLoadingPasien ? (
            <p>Loading...</p>
          ) : (
            dokterPasienCount?.map((dokter) => (
              <div
                key={dokter._id}
                className="flex flex-col border rounded-md border-2"
              >
                <div className="flex items-center justify-center gap-4 w-fit rounded-md transisi px-3 py-2">
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
      <div className="py-6 ">
        <h1 className="text-lg font-semibold">
          Jumlah Antrian Dokter Besok: {localTomorrowDate}
        </h1>
        <div className="flex flex-wrap py-4 gap-6">
          {isLoadingDoctor || isLoadingPasien ? (
            <p>Loading...</p>
          ) : (
            dokterPasienCountBesok?.map((dokter) => (
              <div
                key={dokter._id}
                className="flex flex-col border rounded-md border-2"
              >
                <div className="flex items-center justify-center gap-4 w-fit rounded-md transisi px-3 py-2">
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
      <div>
        <h1 className="text-lg font-semibold">
          Jumlah Antrian Dokter Lusa: {localTheDayAfterTomorrow}
        </h1>
        <div className="flex flex-wrap py-4 gap-6">
          {isLoadingDoctor || isLoadingPasien ? (
            <p>Loading...</p>
          ) : (
            dokterPasienCountLusa?.map((dokter) => (
              <div
                key={dokter._id}
                className="flex flex-col border rounded-md border-2"
              >
                <div className="flex items-center justify-center gap-4 w-fit rounded-md transisi px-3 py-2">
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
    </div>
  );
}

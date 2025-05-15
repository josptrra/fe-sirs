import React, { useState, useEffect } from 'react';
import { getPeriksas } from '@/services/pemeriksaan';
import { useQuery } from '@tanstack/react-query';
import { getDoctorNameById } from '@/services/doctors';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function AdminDataPeriksa() {
  const [data, setData] = useState([]);
  const [dokterNames, setDokterNames] = useState({});

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
              names[item.dokter.idDokter] = doctorName;
            } catch (error) {
              console.error(
                'Error fetching doctor name for idDokter:',
                item.dokter.idDokter
              );
            }
          }
        }
        setDokterNames(names);
      }
    };
    fetchDoctorNames();
  }, [periksaData]);
  return (
    <>
      <Table>
        <TableCaption>A list of data pemeriksaan</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Nama Pasien</TableHead>
            <TableHead>Nama Dokter</TableHead>
            <TableHead>Keluhan</TableHead>
            <TableHead>Hasil Diagnosa</TableHead>
            <TableHead>Resep Obat</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {periksaData?.map((item, index) => (
            <TableRow key={item._id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{item.pasien?.namaPasien}</TableCell>
              <TableCell>
                {dokterNames[item.dokter?.idDokter] || 'Loading...'}
              </TableCell>
              <TableCell>{item.keluhan}</TableCell>
              <TableCell>{item.analisa}</TableCell>
              <TableCell>{item.resepObat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

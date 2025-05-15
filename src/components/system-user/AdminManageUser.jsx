import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { GetAllUsers } from '@/services/getUserData';

export default function AdminManageUser() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mengambil data pengguna saat komponen dimuat
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await GetAllUsers(); // Mengambil data semua pengguna
        setUsers(data); // Set data pengguna ke state
        setLoading(false); // Set loading menjadi false setelah data berhasil diambil
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false); // Set loading false meski gagal mengambil data
      }
    }

    fetchData();
  }, []); // Hanya dijalankan sekali saat komponen pertama kali dimuat

  if (loading) {
    return <p>Loading...</p>; // Menampilkan loading selama data sedang diambil
  }
  return (
    <Table>
      <TableCaption>A list of all users.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>No</TableHead>
          <TableHead>Nama</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user, index) => (
          <TableRow key={user._id}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{user.nama}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

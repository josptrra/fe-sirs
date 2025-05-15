'use client';

import AdminDataPeriksa from '@/components/system-user/AdminDataPeriksa';
import React from 'react';

export default function RootLayout({ children }) {
  return (
    <main>
      <AdminDataPeriksa />
    </main>
  );
}

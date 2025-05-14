'use client';

import RiwayatPasien from '@/components/system-user/RiwayatPasien';
import React from 'react';

export default function RootLayout({ children }) {
  return (
    <main>
      <RiwayatPasien />
    </main>
  );
}

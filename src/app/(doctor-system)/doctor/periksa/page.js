'use client';

import PeriksaPasien from '@/components/system-user/PeriksaPasien';
import React from 'react';

export default function RootLayout({ children }) {
  return (
    <main>
      <PeriksaPasien />
    </main>
  );
}

'use client';

import DashboardPasien from '@/components/system-user/DashboardPasien';
import React from 'react';

export default function RootLayout({ children }) {
  return (
    <main>
      <DashboardPasien />
    </main>
  );
}

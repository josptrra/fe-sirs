'use client';

import AdminRegisDokter from '@/components/system-user/AdminRegisDokter';
import React from 'react';

export default function RootLayout({ children }) {
  return (
    <main>
      <AdminRegisDokter />
    </main>
  );
}

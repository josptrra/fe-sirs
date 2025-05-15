'use client';

import AdminManageUser from '@/components/system-user/AdminManageUser';
import React from 'react';

export default function RootLayout({ children }) {
  return (
    <main>
      <AdminManageUser />
    </main>
  );
}

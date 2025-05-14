'use client';

import RekamMedis from '@/components/system-user/RekamMedis';
import React from 'react';

export default function RootLayout({ children }) {
  return (
    <main>
      <RekamMedis />
    </main>
  );
}

'use client';

import JanjiTemu from '@/components/system-user/JanjiTemu';
import React, { useState } from 'react';

export default function RootLayout({ children }) {
  return (
    <main>
      <JanjiTemu />
    </main>
  );
}

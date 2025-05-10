'use client';

import React from 'react';
import { GetUserById } from '@/services/getUserData';
import { useQuery } from '@tanstack/react-query';

export default function HeaderUser() {
  const { isLoading: isLoadingUser, data: user } = useQuery({
    queryKey: ['dataUser'],
    queryFn: () => GetUserById(),
  });

  return (
    <div className="hidden w-full items-center justify-between py-3 md:flex">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="flex justify-end gap-3">
        {isLoadingUser ? (
          <span>Loading...</span>
        ) : (
          <span>Selamat Datang, {user?.name || 'User'}</span>
        )}
      </div>
    </div>
  );
}

import { cn } from '@/lib/utils';
import React from 'react';

export default function ButtonAuth({ title, isLoading }) {
  return (
    <button
      type="submit"
      className={cn(
        `bg-blue-900 my-3 mt-5 w-full border py-3 text-center font-bold text-white `,
        { 'bg-gray-200': isLoading }
      )}
      disabled={isLoading}
    >
      {title}
    </button>
  );
}

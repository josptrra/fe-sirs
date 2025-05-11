import React from 'react';

export default function ButtonSistem({ name, isLoading }) {
  return (
    <>
      <div
        className={`mx-auto mb-8 flex w-full px-4 py-2 pb-4 md:w-10/12 lg:mb-0 lg:w-64`}
      >
        {!isLoading ? (
          <button
            className={`bg-blue-900 transisi w-full rounded-lg border py-3 text-sm text-white hover:-translate-y-[0.1rem] md:text-base`}
          >
            {name}
          </button>
        ) : (
          <button
            className={`w-full animate-bounce rounded-lg border bg-gray-300 py-3 text-sm text-gray-400 md:text-base`}
            disabled
          >
            {name}
          </button>
        )}
      </div>
      {isLoading && (
        <p className="w-full text-center text-red-500">
          Mohon tunggu! Pengajuan anda sedang diproses...
        </p>
      )}
    </>
  );
}

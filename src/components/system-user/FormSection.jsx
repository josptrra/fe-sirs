import React from 'react';

export default function FormSection({ title, children }) {
  return (
    <>
      <h1 className="w-full px-4 py-5 text-[16px] font-bold md:text-lg lg:text-[20px]">
        {title}
      </h1>
      <div className="w-full px-6">{children}</div>
    </>
  );
}

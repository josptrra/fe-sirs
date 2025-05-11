import React from 'react';

export default function InputFormSistem({ title, children, required = false }) {
  return (
    <>
      <p className="mt-1 text-sm font-semibold md:text-[16px] xl:text-lg">
        {title}
        {required && <span className="ml-1 text-red-600">*</span>}
      </p>
      {children}
    </>
  );
}

import React from 'react';

export default function FormCheckbox({ title, children }) {
  return (
    <label className="mt-2 flex flex-row px-4 pb-3">
      {children}
      <span className="pl-2 text-sm">{title}</span>
    </label>
  );
}

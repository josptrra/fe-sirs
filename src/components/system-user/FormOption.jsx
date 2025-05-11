import React from 'react';

export default function FormOption({ title }) {
  return <option value={title.replace(/\s/g, '')}>{title}</option>;
}

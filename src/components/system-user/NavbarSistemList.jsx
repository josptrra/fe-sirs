import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

export default function NavbarSistemList({ NavList, href }) {
  return (
    <Link
      href={href}
      className="w-full rounded-lg px-6 py-3 text-sm transition-all duration-200 ease-in-out hover:bg-blue-100 md:text-base"
    >
      {NavList}
    </Link>
  );
}
NavbarSistemList.propTypes = {
  NavList: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

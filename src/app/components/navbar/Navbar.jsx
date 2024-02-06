import Link from 'next/link';
import React from 'react';
import styles from './navbar.module.css';
import Links from './links/Links';
import { FaGlobe } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <div className={styles.logoStyles}>
          <FaGlobe />
        </div>
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;

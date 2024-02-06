import React from 'react';
import styles from './footer.module.css';
import { FaGlobe } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">
          <div className={styles.logoStyles}>
            <FaGlobe />
          </div>
        </Link>
      </div>
      <div className={styles.text}>Your site © 2024.</div>
    </div>
  );
};

export default Footer;

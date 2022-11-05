import styles from '../../styles/Nav.module.css';
import Link from 'next/link';
import { useRef, useState } from 'react';

const MobileNav = props => {

  return (
    <nav className={props.burgerClicked ? styles.mobileNav : `${styles.mobileNav} ${styles.isActive}`} >
      <Link href='/' className={styles.mobileNavLink}>Home</Link>
      <Link href='/' className={styles.mobileNavLink}>About</Link>
      <Link href='/' className={styles.mobileNavLink}>Services</Link>
    </nav>
  );
};

export default MobileNav;
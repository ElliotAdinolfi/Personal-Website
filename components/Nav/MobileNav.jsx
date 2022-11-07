import styles from '../../styles/Nav.module.css';
import Link from 'next/link';
import { useRef, useState } from 'react';

const MobileNav = props => {

  return (
    <nav className={props.burgerClicked ? styles.mobileNav : `${styles.mobileNav} ${styles.isActive}`} >
      <Link href='/' className={styles.mobileNavLink}>Home</Link>
      <Link href='/expertise' className={styles.mobileNavLink}>Expertise</Link>
    </nav>
  );
};

export default MobileNav;
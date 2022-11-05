import styles from '../../styles/Nav.module.css';
import Link from 'next/link';

const RightNav = () => {
  return (
    <div className={styles.rightSide}>
      <Link href='/' className={styles.navLink}>Home</Link>
      <Link href='/' className={styles.navLink}>About</Link>
      <Link href='/' className={styles.navLink}>Services</Link>
      <button id={styles.hireMe}>Hire Me</button>
    </div>
  );
};

export default RightNav;

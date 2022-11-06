import styles from '../../styles/Nav.module.css';
import Link from 'next/link';
import ContactForm from '../Forms/ContactForm';
import { useState } from 'react';

const RightNav = () => {

  const [ showForm, setShowForm ] = useState(false);

  const hireMeClicked = () => {
    setShowForm(!showForm);
  };

  return (
    <div className={styles.rightSide}>
      <Link href='/' className={styles.navLink}>Home</Link>
      <Link href='/' className={styles.navLink}>About</Link>
      <Link href='/' className={styles.navLink}>Services</Link>
      <button id={styles.hireMe} onClick={hireMeClicked}>Hire Me</button>
      {showForm ? <ContactForm showForm={showForm} setShowForm={setShowForm}/> : null}
    </div>
  );
};

export default RightNav;

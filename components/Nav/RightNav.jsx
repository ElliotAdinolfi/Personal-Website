import styles from '../../styles/Nav.module.css';
import Link from 'next/link';
import ContactForm from '../Forms/ContactForm';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

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
      <AnimatePresence>
        {showForm && <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          >
            <ContactForm showForm={showForm} setShowForm={setShowForm}/>
        </motion.div>}
      </AnimatePresence>
      <button id={styles.hireMe} onClick={hireMeClicked}>Hire Me</button>
    </div>
  );
};

export default RightNav;

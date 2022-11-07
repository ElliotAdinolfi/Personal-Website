import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import ElliotHeadshot from '../../public/Portrait2.png';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ContactForm from '../Forms/ContactForm';

const Center = () => {
  const [ showForm, setShowForm ] = useState(false);

  const hireMeClicked = () => {
    setShowForm(!showForm);
  };

  return (
    <div className={styles.centerHome}>
      <div className={styles.info}>
        <p className={styles.heading}>Hi. I'm Elliot.</p>
        <p className={styles.caption}>Software Engineer and Web Developer.</p>
      </div>
      <div className={styles.flair}>
        <Image 
        className={styles.picture}
        src={ElliotHeadshot}
        alt='Pic of me'
        width={500}
        height={470}
        />
      </div>
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

export default Center;
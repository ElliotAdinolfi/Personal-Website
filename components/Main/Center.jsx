import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import ElliotHeadshot from '../../public/Portrait2.png';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ContactForm from '../Forms/ContactForm';
import SuccessAlert from '../Forms/SuccessAlert';
import ErrorAlert from '../Forms/ErrorAlert';

const Center = () => {
  const [ showForm, setShowForm ] = useState(false);
  const [ showSuccess, setShowSuccess ] = useState(false);
  const [ showError, setShowError ] = useState(false);

  const handleHireButton = () => {
    setShowForm(!showForm);
  };

  const handleSuccess = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 10000);
  };

  const handleError = () => {
    setShowError(true);
    setTimeout(() => {
      setShowError(false);
    }, 10000);
  };

  const handleDismissAlert = () => {
    setShowSuccess(false);
    setShowError(false);
  };

  return (
    <div className={styles.centerHome}>
      <div className={styles.info}>
        <motion.span 
        className={styles.heading}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: .8 }}
        >Hi. </motion.span>
        <motion.span 
        className={styles.heading}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: .8, delay: 1 }}
        >I'm Elliot.</motion.span>
        <motion.div 
        className={styles.caption}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: .8, delay: 2 }}
        >Software Engineer and Web Developer.</motion.div>

      </div>
      <motion.div 
      className={styles.flair}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: .8, delay: 3 }}
      >
        <Image 
        className={styles.picture}
        src={ElliotHeadshot}
        alt='Pic of me'
        width={500}
        height={470}
        />
      </motion.div>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: .8, delay: 3 }}
      >
        <button id={styles.hireMe} onClick={handleHireButton}>Hire Me</button>
      </motion.div>
      <AnimatePresence>
        {showForm && <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          >
            <ContactForm 
            showForm={showForm} 
            setShowForm={setShowForm}
            handleSuccess={handleSuccess}
            handleError={handleError}
            />
        </motion.div>}
      </AnimatePresence>
      <AnimatePresence>
        {showSuccess && <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          >
            <SuccessAlert
              handleDismissAlert={handleDismissAlert}
            />
        </motion.div>}
      </AnimatePresence>
      <AnimatePresence>
        {showError && <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          >
            <ErrorAlert
              handleDismissAlert={handleDismissAlert}
            />
        </motion.div>}
      </AnimatePresence>
    </div>
  );
};

export default Center;
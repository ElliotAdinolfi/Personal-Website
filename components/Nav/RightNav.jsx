import styles from '../../styles/Nav.module.css';
import Link from 'next/link';
import ContactForm from '../Forms/ContactForm';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SuccessAlert from '../Forms/SuccessAlert';
import ErrorAlert from '../Forms/ErrorAlert';

const RightNav = () => {
  const [ showForm, setShowForm ] = useState(false);
  const [ showSuccess, setShowSuccess ] = useState(false);
  const [ showError, setShowError ] = useState(false);

  const hireMeClicked = () => {
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
    <div className={styles.rightSide}>
      <Link href='/' className={styles.navLink}>Home</Link>
      <Link href='/' className={styles.navLink}>About</Link>
      <Link href='/' className={styles.navLink}>Services</Link>
      <button id={styles.hireMe} onClick={hireMeClicked}>Hire Me</button>
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

export default RightNav;

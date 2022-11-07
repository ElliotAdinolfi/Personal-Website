import styles from '../../styles/Home.module.css';
import { motion } from 'framer-motion';

const Right = () => {
  return (
    <motion.div 
    className={styles.rightHome}
    initial={{ opacity: 0 }}
    animate={{ opacity: .5 }}
    transition={{ delay: 3 }}
    >
      <p className={styles.letters}>R</p>
      <p className={styles.letters}>O</p>
      <p className={styles.letters}>Y</p>
      <p className={styles.letters}>C</p>
      <p className={styles.letters}>E</p>
    </motion.div>
  );
};

export default Right;
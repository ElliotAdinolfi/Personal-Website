import styles from '../../styles/Home.module.css';
import { motion } from 'framer-motion';

const Left = () => {
  return (
    <motion.div 
    className={styles.leftHome}
    initial={{ opacity: 0 }}
    animate={{ opacity: .5 }}
    transition={{ delay: 3 }}
    >
      <p className={styles.letters}>E</p>
      <p className={styles.letters}>L</p>
      <p className={styles.letters}>L</p>
      <p className={styles.letters}>I</p>
      <p className={styles.letters}>O</p>
      <p className={styles.letters}>T</p>
    </motion.div>
  );
};

export default Left;
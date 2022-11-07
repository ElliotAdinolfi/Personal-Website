import styles from '../../styles/Expertise.module.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import who from '../../public/who.png';
import what from '../../public/what.png';
import where from '../../public/where.png';

const CenterExpertise = () => {

  const [ activeMenu, setActiveMenu ] = useState(0);

  const handleActiveMenu = selection => {
    setActiveMenu(selection);
  };  

  return (
    <div className={styles.center}>

      <motion.div className={styles.wordContainer}>

      </motion.div>

      <motion.div className={styles.menuContainer}>

        <motion.div className={activeMenu === 0 ? `${styles.menuToggle} ${styles.activeMenu}` : styles.menuToggle} onClick={() => handleActiveMenu(0)}>
          <Image 
          className={styles.menuImage}
          src={who}
          alt='Icon of contact book'
          width={80}
          height={80}
          />
          <div className={styles.menuText}>
            <p>
              Who I Am
            </p>
            <p>
              Software Engineer
            </p>
          </div>
        </motion.div>

        <motion.div className={activeMenu === 1 ? `${styles.menuToggle} ${styles.activeMenu}` : styles.menuToggle} onClick={() => handleActiveMenu(1)}>
        <Image 
          className={styles.menuImage}
          src={what}
          alt='Icon of book with computer code'
          width={80}
          height={80}
          />
          <div className={styles.menuText}>
            <p>
              What I Know
            </p>
            <p>
              Languages & Frameworks
            </p>
          </div>
        </motion.div>

        <motion.div className={activeMenu === 2 ? `${styles.menuToggle} ${styles.activeMenu}` : styles.menuToggle} onClick={() => handleActiveMenu(2)}>
        <Image 
          className={styles.menuImage3}
          src={where}
          alt='Icon of computer'
          width={65}
          height={65}
          />
          <div className={styles.menuText3}>
            <p>
              Where I Work
            </p>
            <p>
              Panoptic & OS Labs
            </p>
          </div>
        </motion.div>

      </motion.div>

    </div>
  );
};

export default CenterExpertise;
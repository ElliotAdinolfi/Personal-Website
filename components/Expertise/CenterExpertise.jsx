import styles from '../../styles/Expertise.module.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import who from '../../public/who.png';
import what from '../../public/what.png';
import where from '../../public/where.png';
import storybook from '../../public/storybook.png';
import javascript from '../../public/javascript.png';
import work from '../../public/work.png';

const CenterExpertise = () => {

  const [ activeMenu, setActiveMenu ] = useState(0);

  const handleActiveMenu = selection => {
    setActiveMenu(selection);
  };  

  return (
    <div className={styles.center}>

      {activeMenu === 0 && <motion.div 
      className={styles.wordContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: .8 }}
      >
        <div className={styles.title}>
          <Image 
          className={styles.textImage}
          src={storybook}
          alt='Icon of storybook'
          width={80}
          height={80}
          />
          <p>
            Hey There, I'm Elliot
          </p>
        </div>
        <div className={styles.description}>
          <p>
            Full-stack software engineer. Amateur rock climber. Fantasy book nerd.
          </p>
          <p>
            I love building cool things. When I'm not coding, I probably have my head stuck in a book. 
          </p>
          <p>
          Right now I'm reading: A Wise Man's Fear by Patrick Rothfuss 🧙‍♂️
          </p>
        </div>
      </motion.div>}

      {activeMenu === 1 && <motion.div 
      className={styles.wordContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: .8 }}
      >
        <div className={styles.title}>
          <Image 
          className={styles.textImage}
          src={javascript}
          alt='Icon of computer monitor'
          width={80}
          height={80}
          />
          <p>
            Front-End & Back-End
          </p>
        </div>
        <div className={styles.description}>
          <p>
            Passionate about building beautiful and responsive full stack applications.
          </p>
          <p>
            Three years of experience with both front-end and back-end frameworks, and multiple languages
          </p>
          <p>
          🔥 JavaScript • TypeScript • React • Node • Express • Python • SQL 🔥
          </p>
        </div>
      </motion.div>}

      {activeMenu === 2 && <motion.div 
      className={styles.wordContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: .8 }}
      >
        <div className={styles.title}>
          <Image 
          className={styles.textImage}
          src={work}
          alt='Icon of craft work'
          width={80}
          height={80}
          />
          <p>
            Honing my Craft
          </p>
        </div>
        <div className={`${styles.description} ${styles.lastPage}`}>
          <p>
            Currently I'm working at OS Labs, developing Panoptic.
          </p>
          <p>
            An open source developer tool for making fast, reliable, and accessible websites.
          </p>
          <p>
            Here I made a NoSQL database, created new API endpoints, designed and implemented a user dashboard.
          </p>
          <p>
            Previously I developed software while working at Freedom Mortgage Corp, and contributed to multiple open source projects.
          </p>
        </div>
      </motion.div>}

      <motion.div className={styles.menuContainer}>

        <motion.div className={activeMenu === 0 ? `${styles.menuToggle} ${styles.activeMenu}` : styles.menuToggle} onClick={() => handleActiveMenu(0)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: .75 }}
        >
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

        <motion.div className={activeMenu === 1 ? `${styles.menuToggle} ${styles.activeMenu}` : styles.menuToggle} onClick={() => handleActiveMenu(1)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        >
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

        <motion.div className={activeMenu === 2 ? `${styles.menuToggle} ${styles.activeMenu}` : styles.menuToggle} onClick={() => handleActiveMenu(2)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.25 }}
        >
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
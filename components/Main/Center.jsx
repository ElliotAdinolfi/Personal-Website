import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import ElliotHeadshot from '../../public/ElliotHeadshot.png';

const Center = () => {

  return (
    <div className={styles.centerHome}>
      <div className={styles.info}>
        <p className={styles.heading}>Hi. I'm Elliot.</p>
        <p className={styles.caption}>Software Engineer and Web Developer.</p>
      </div>
      <div className={styles.flair}>
        <div className={styles.picture}></div>
      </div>
      <button id={styles.hireMe}>Hire Me</button>
    </div>
  );
};

export default Center;
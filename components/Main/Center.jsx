import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import ElliotHeadshot from '../../public/Portrait2.png';

const Center = () => {

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
      <button id={styles.hireMe}>Hire Me</button>
    </div>
  );
};

export default Center;
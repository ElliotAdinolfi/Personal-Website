import Image from 'next/image';
import styles from '../styles/Footer.module.css';
import LinkedIn from '../public/LinkedIn.png';
import GitHub from '../public/github.png';
import Medium from '../public/Medium.png';
import Twitter from '../public/twitter.png';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <a href='https://medium.com/@elliot.adinolfi' target='_blank'>
        <Image 
          className={styles.mediumLogo}
          src={Medium}
          alt='Medium Logo'
          width={225}
          height={50}
          />
      </a>
      <a href='https://www.linkedin.com/in/elliot-adinolfi/' target='_blank'>
        <Image 
          className={styles.LILogo}
          src={LinkedIn}
          alt='LinkedIn Logo'
          width={160}
          height={35}
        />
      </a>
      <a href='https://github.com/ElliotAdinolfi' target='_blank'>
        <Image 
          className={styles.GHLogo}
          src={GitHub}
          alt='GitHub Logo'
          width={155}
          height={50}
        />
      </a>
      <a href='https://twitter.com/Elliot_Adinolfi' target='_blank'>
        <Image 
          className={styles.TWLogo}
          src={Twitter}
          alt='Twitter Logo'
          width={150}
          height={30}
        />
      </a>
    </div>
  );
};

export default Footer;
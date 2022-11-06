import Image from 'next/image';
import styles from '../../styles/Footer.module.css';
import LinkedIn from '../../public/LinkedIn2.png';
import GitHub from '../../public/github2.png';
import Medium from '../../public/Medium2.png';
import Twitter from '../../public/twitter2.png';

const MobileFooter = () => {
  return (
    <div className={styles.mobileFooter}>
      <a href='https://medium.com/@elliot.adinolfi' target='_blank'>
        <Image 
          className={styles.mediumLogo2}
          src={Medium}
          alt='Medium Logo'
          width={45}
          height={45}
        />
      </a>
      <a href='https://www.linkedin.com/in/elliot-adinolfi/' target='_blank'>
        <Image 
          className={styles.LILogo2}
          src={LinkedIn}
          alt='LinkedIn Logo'
          width={45}
          height={45}
        />
      </a>
      <a href='https://github.com/ElliotAdinolfi' target='_blank'>
        <Image 
          className={styles.GHLogo2}
          src={GitHub}
          alt='GitHub Logo'
          width={45}
          height={45}
        />
      </a>
      <a href='https://twitter.com/Elliot_Adinolfi' target='_blank'>
        <Image 
          className={styles.TWLogo2}
          src={Twitter}
          alt='Twitter Logo'
          width={45}
          height={45}
        />
      </a>
    </div>
  );
};

export default MobileFooter;
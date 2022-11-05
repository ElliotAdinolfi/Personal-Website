import Image from 'next/image';
import styles from '../../styles/Footer.module.css';
import LinkedIn from '../../public/LinkedIn2.png';
import GitHub from '../../public/github2.png';
import Medium from '../../public/Medium2.png';
import Twitter from '../../public/twitter2.png';

const MobileFooter = () => {
  return (
    <div className={styles.mobileFooter}>
      <Image 
        className={styles.mediumLogo2}
        src={Medium}
        alt='Medium Logo'
        width={45}
        height={45}
      />
      <Image 
        className={styles.LILogo2}
        src={LinkedIn}
        alt='LinkedIn Logo'
        width={45}
        height={45}
      />
      <Image 
        className={styles.GHLogo2}
        src={GitHub}
        alt='GitHub Logo'
        width={45}
        height={45}
      />
      <Image 
        className={styles.TWLogo2}
        src={Twitter}
        alt='Twitter Logo'
        width={45}
        height={45}
      />
    </div>
  );
};

export default MobileFooter;
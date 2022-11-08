import styles from '../styles/Expertise.module.css';
import CenterExpertise from '../components/Expertise/CenterExpertise';
import Right from '../components/Main/Right';
import Left from '../components/Main/Left';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import MobileFooter from '../components/Footer/MobileFooter';

const About = () => {
  return (
    <div className={styles.expertise}>
      <Nav />
      <Left delay={1.5}/>
      <CenterExpertise />
      <Right delay={1.5} />
      <Footer />
      <MobileFooter />
    </div>
  );
};

export default About;
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Nav from '../components/Nav';
import Center from '../components/Main/Center';
import Right from '../components/Main/Right';
import Left from '../components/Main/Left';
import Footer from '../components/Footer';
import MobileFooter from '../components/Footer/MobileFooter';

import SuccessAlert from '../components/Forms/SuccessAlert';
import ErrorAlert from '../components/Forms/ErrorAlert';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Elliot Adinolfi</title>
        <meta name='description' content='Portfolio for Elliot Adinolfi, Software Engineer' />
        <link rel="icon" href="https://cdn.iconscout.com/icon/premium/png-256-thumb/developer-portfolio-881579.png" />
      </Head>
      <Nav />
      <div className={styles.homePage}>
        <Left />
        <Center />
        <Right />
      </div>
      <Footer />
      <MobileFooter />
    </div>
  )
}

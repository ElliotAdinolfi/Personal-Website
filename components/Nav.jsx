import styles from '../styles/Nav.module.css';
import LeftNav from './Nav/LeftNav';
import RightNav from './Nav/RightNav';
import Hamburger from './Nav/Hamburger';
import MobileNav from './Nav/MobileNav';
import { useState } from 'react';

const Nav = () => {

  const [ burgerClicked, setBurgerClicked ] = useState(true);

  return (
    <div className={styles.navBar}>
      <LeftNav />
      <RightNav />
      <Hamburger burgerClicked={burgerClicked} setBurgerClicked={setBurgerClicked} />
      <MobileNav burgerClicked={burgerClicked}/>
    </div>
  )
};

export default Nav;

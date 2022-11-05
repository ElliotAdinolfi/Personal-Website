import { useEffect, useRef, useState } from 'react';
import styles from '../../styles/Nav.module.css';

const Hamburger = props => {

  const hamburgerClick = () => {
    props.setBurgerClicked(!props.burgerClicked);
  };

  return (
    <button
    className={props.burgerClicked ? styles.hamburger : `${styles.hamburger} ${styles.isActive}`} 
    onClick={hamburgerClick}>
      <div className={styles.bar}>

      </div>
    </button>
  );
};

export default Hamburger;

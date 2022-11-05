import styles from '../../styles/Nav.module.css';

const LeftNav = () => {
  return (
    <div className={styles.leftSide}>
      <p id={styles.logo}>E</p>
      <p id={styles.name}>Elliot Royce Adinolfi</p>
    </div>
  );
};

export default LeftNav;

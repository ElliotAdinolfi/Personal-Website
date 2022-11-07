import styles from '../../styles/Alerts.module.css';

const SuccessAlert = () => {
  return (
    <div className={styles.successContainer}>
      <span>Thanks! 😃</span>
      <span>I'll be in touch soon</span>
      <div className={styles.close}>&times;</div>
    </div>
  );
};

export default SuccessAlert;
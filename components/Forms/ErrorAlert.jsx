import styles from '../../styles/Alerts.module.css';

const ErrorAlert = () => {
  return (
    <div className={styles.errorContainer}>
      <span>Oh no! 😓</span>
      <span>Something went wrong</span>
      <div className={styles.close}>&times;</div>
    </div>
  );
};

export default ErrorAlert;
import styles from '../../styles/Alerts.module.css';

const ErrorAlert = props => {
  
  return (
    <div className={styles.errorContainer}>
      <span>Oh no! 😓</span>
      <span>Something went wrong</span>
      <div className={styles.close} onClick={props.handleDismissAlert}>&times;</div>
    </div>
  );
};

export default ErrorAlert;
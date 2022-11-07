import styles from '../../styles/Alerts.module.css';

const SuccessAlert = props => {

  return (
    <div className={styles.successContainer}>
      <span>Thanks! 😃</span>
      <span>I'll be in touch soon</span>
      <div className={styles.close} onClick={props.handleDismissAlert}>&times;</div>
    </div>
  );
};

export default SuccessAlert;
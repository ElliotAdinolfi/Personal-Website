import styles from '../../styles/Forms.module.css';
import { useState } from 'react';
import { send } from '@emailjs/browser';
import letter from '../../public/letter.png';
import Image from 'next/image';


const ContactForm = props => {

  const [toSend, setToSend] = useState({
    from_name: '',
    reply_to: '',
    message: ''
  });

  const onSubmit = e => {
    e.preventDefault();
    console.log(process.env.NEXT_PUBLIC_USER_ID)
    send(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, toSend, process.env.NEXT_PUBLIC_USER_ID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
          console.log('FAILED...', err);
      });
    setToSend({
      from_name: '',
      reply_to: '',
      message: ''
    });
    props.setShowForm(!props.showForm);
  };

  const handleChange = e => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const clickedCancel = () => {
    props.setShowForm(!props.showForm);
  };

  return (
    <div className={styles.glass}>
      <div className={styles.contactForm}>
        <form className={styles.formContainer} onSubmit={onSubmit}>
          <div className={styles.contactLeft}>
            <p>Contact</p>
            <p className={styles.leftText}>Me</p>
            <Image 
              className={styles.letter}
              src={letter}
              alt='Picture of Letter'
              width={150}
              height={150}
            />
          </div>
          <div className={styles.containerRight}>
            <div className={styles.contactRight}>
              <div className={styles.inputs}>
                <input
                  className={styles.textBox}
                  type='text'
                  name='from_name'
                  placeholder='Your Name'
                  value={toSend.from_name}
                  onChange={handleChange}
                  required
                  />
                <input
                  className={styles.textBox}
                  type='text'
                  name='reply_to'
                  placeholder='Your Email'
                  value={toSend.reply_to}
                  onChange={handleChange}
                  required
                  />
                <textarea
                  className={`${styles.textBox} ${styles.textArea}`}
                  type='text'
                  name='message'
                  placeholder='Message'
                  value={toSend.message}
                  onChange={handleChange}
                  required
                  />
              </div>
              <div className={styles.buttonContainer}>
                <button className={styles.buttons} type='cancel' onClick={clickedCancel} >Cancel</button>
                <button className={styles.buttons} type='submit'>Send</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
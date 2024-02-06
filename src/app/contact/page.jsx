'use client';
import styles from './contact.module.css';
import Image from 'next/image';
const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.image} />
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Phone (Optional)" />
          <textarea
            name=""
            placeholder="message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

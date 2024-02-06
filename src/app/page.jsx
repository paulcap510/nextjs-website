import styles from './home.module.css';
import Image from 'next/image';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts</h1>
        <p className={styles.description}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
          repudiandae laboriosam beatae, dolorum impedit cumque sit blanditiis
          quam ipsum itaque mollitia autem non doloremque fugit? Sint quibusdam
          doloribus enim nam.
        </p>
        <div className={styles.buttons}>
          <button className={`${styles.button} ${styles.learnMore}`}>
            Learn More
          </button>
          <button className={`${styles.button} ${styles.contact}`}>
            Contact
          </button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;

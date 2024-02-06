import styles from './singlePost.module.css';
import Image from 'next/image';

const SinglePostPage = ({ params }) => {
  console.log(params);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/20035357/pexels-photo-20035357/free-photo-of-a-building-with-a-balcony-and-a-balcony-on-the-side.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt="Description of the image"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>title</h1>
        <div className={styles.details}>
          <Image
            src="https://images.pexels.com/photos/20035357/pexels-photo-20035357/free-photo-of-a-building-with-a-balcony-and-a-balcony-on-the-side.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt="Description of the image"
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>author</span>
            <span className={styles.detailValue}>user</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>published</span>
            <span className={styles.detailValue}>01.01.24</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sequi
          enim consequatur rerum quam at quibusdam eos laudantium fugiat unde
          odit, corporis, ipsa facere non perferendis consequuntur sit odio
          provident.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;

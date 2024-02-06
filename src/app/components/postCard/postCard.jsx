import Image from 'next/image';
import styles from './postCard.module.css';
import Link from 'next/link';

const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/20035357/pexels-photo-20035357/free-photo-of-a-building-with-a-balcony-and-a-balcony-on-the-side.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            fill
            objectFit="cover"
            alt="Description of the image"
            className={styles.img}
          />
        </div>
        <span className={styles.date}></span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.id}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;

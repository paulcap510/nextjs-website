import React from 'react';
import styles from './admin.module.css';

const AdminPage = () => {
  // sample posts for Admin page functionality
  const posts = [
    { id: 1, title: 'Another Story' },
    { id: 2, title: 'He and Sea' },
    { id: 3, title: 'What is this a Building?' },
    { id: 4, title: 'Thinking of Ending Things' },
    { id: 5, title: 'Balancing My Life' },
    { id: 6, title: 'Where I Got Lost?' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <h2>Posts</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <span>{post.title}</span>
              <button>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.rightColumn}>
        <h2>Add New Post</h2>
        <div className={styles.formContainer}>
          <form className={styles.form}>
            <input type="text" placeholder="title" />
            <input type="text" placeholder="slug" />
            <input type="text" placeholder="image" />
            <textarea placeholder="desc"></textarea>
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;

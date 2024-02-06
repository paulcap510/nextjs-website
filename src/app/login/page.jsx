import styles from './login.module.css';

const LoginPage = () => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginPanel}>
        <h1 className={styles.loginTitle}>Login</h1>
        <button className={`${styles.loginButton} ${styles.googleButton}`}>
          Sign in with Google
        </button>
        <button className={`${styles.loginButton} ${styles.githubButton}`}>
          Sign in with Github
        </button>
        <div className={styles.orSeparator}>OR</div>
        <input
          type="text"
          placeholder="username"
          className={styles.inputField}
        />
        <input
          type="password"
          placeholder="password"
          className={styles.inputField}
        />
        <button className={styles.signInButton}>
          Sign in with Credentials
        </button>
        <p className={styles.registerPrompt}>
          Don't have an account?{' '}
          <span className={styles.registerLink}>Register</span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

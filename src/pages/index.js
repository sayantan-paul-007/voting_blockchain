import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to My Next.js App</h1>  {/* Use the custom class */}
      <h2 className={styles.subtitle}>User Profiles</h2>           {/* Use the custom class */}
      <ul className={styles.list}>                                 {/* Use the custom class */}
        <li className={styles.listItem}>
          <Link href="/users/1" className={styles.link}>User 1</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/users/2" className={styles.link}>User 2</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/users/3" className={styles.link}>User 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;

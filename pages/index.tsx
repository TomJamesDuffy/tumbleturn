import type { NextPage } from 'next';

import Schedule from '../src/components/Schedule';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => (
  <div className={styles.container}>
    <Schedule />
  </div>
);

export default Home;

import AllPosts from '../../features/AllPosts/AllPosts';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <AllPosts />
    </div>
  );
};

export default Home;
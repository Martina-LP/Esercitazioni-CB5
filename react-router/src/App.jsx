import { Link } from 'react-router-dom';
import styles from './App.module.scss';

function App() {

  return (
    <div className={styles.App}>
      <h1>Welcome to the Homepage</h1>
      <Link to="/users" className={styles.link}>Go to Users</Link>
      <br />
      <Link to="/posts" className={styles.link}>Go to Posts</Link>
    </div>
  );
}

export default App;

import { Link } from 'react-router-dom';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <h1>Welcome to the Homepage</h1>
      <Link to="/users">Go to Users</Link>
    </div>
  );
}

export default App;

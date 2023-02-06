
import Title from './components/title/Title';
import Counter from './components/counter/Counter';
import styles from './App.module.scss';

function App() {

  return (
    <div className={styles.App}>
      <Title />
      <Counter />
    </div>
  );
};

export default App;

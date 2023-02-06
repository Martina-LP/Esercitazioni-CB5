import { useContext } from 'react';
import { Context } from '../../context';
import styles from './index.module.scss';

const Title = () => {
  const value = useContext(Context);

  return (
    <div className={styles.main}>
      <h1 className={styles.Title}>{value.story.title}</h1>
      <p className={styles.Paragraph}>{value.story.paragraph}</p>
    </div>
  );
};

export default Title;

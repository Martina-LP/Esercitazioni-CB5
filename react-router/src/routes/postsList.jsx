import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GET } from '../utils/api';
import styles from './styles/postsList.module.scss';

function PostsList() {
  const [postsList, setPostsList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    GET('posts')
      .then(({ posts }) => setPostsList(posts));
  }, []);

  return (
    <div className={styles.main}>
      <h1>Posts list</h1>
      <button onClick={() => {navigate('/');}}>
        Home
      </button>
      {postsList.map((post) => (
        <>
          <p onClick={() => navigate(`/posts/${post.id}`)}>{post.title}</p>
        </>
      ))}
    </div>
  );
};

export default PostsList;

import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {GET} from '../utils/api';
import styles from './styles/post.module.scss';

function Posts() {
  const { postID } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState({});

  useEffect(() => {
    GET(`posts/${postID}`)
      .then((res) => {
        setPost(res);
    });
  }, []);

  return (
    <div className={styles.Post}>
      <div className={styles.content}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
      <div className={styles.buttons}>
        <button onClick={() => navigate("/")}>Go to Homepage</button>
      </div>
    </div>
  );
};

export default Posts;

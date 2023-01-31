import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GET } from '../utils/api';
import styles from './styles/users.module.scss';

function Users() {
  const { userID } = useParams();

  const [user, setUser] = useState({});

  useEffect(() => {
    GET(`users/${userID}`)
      .then((res) => {
        setUser(res);
    });
  }, []);

  return (
    <div className={styles.Users}>
      <div className={styles.card}>
        <div className={styles.avatar_container}>
          <img src={user.image} alt={user.firstName} />
        </div>
        <h2>
          {user.firstName} {user.lastName}
        </h2>
        <h3>Email: {user.email}</h3>
        <h4>Phone: {user.phone}</h4>
      </div>
    </div>
  );
};

export default Users;

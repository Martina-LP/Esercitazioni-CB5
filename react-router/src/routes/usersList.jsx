import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GET } from '../utils/api';
import styles from './styles/usersList.module.scss';

function UsersList() {
  const [usersList, setUsersList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    GET('users')
      .then(({ users }) => setUsersList(users));
  }, []);

  return (
    <div className={styles.main}>
      <h1>Users list</h1>
      <button onClick={() => {navigate('/');}}>
        Home
      </button>
      {usersList.map((user) => (
        <>
          <p onClick={() => navigate(`/users/${user.id}`)}>{user.firstName}</p>
        </>
      ))}
    </div>
  );
};

export default UsersList;

import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './styles/user.module.scss';

export default function User() {
  let { user } = useParams();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${user}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  return (
    <div className={styles.User} id={userData.id}>
      <div className={styles.content}>
      <img src={userData.image} alt={userData.firstName}></img>
        <h2>{userData.firstName}</h2>
        <h3>{userData.lastName}</h3>
        <h4>{userData.email}</h4>
        <p>{userData.phone}</p>
      </div>
      <div>
        <button className={styles.button} onClick={() => navigate("/")}>Go to Homepage</button>
      </div>
    </div>
  );
}

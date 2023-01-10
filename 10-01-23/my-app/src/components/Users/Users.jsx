import { useEffect, useState } from "react";

const API = {
  url: `https://random-data-api.com/api/v2/users`,
};

function RandomUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUser = () => {
    setLoading(true);
    setError(null);

    fetch(API.url)
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { user, loading, setLoading, error, fetchUser };
};

export function NewUser() {
  const { user, loading, error, fetchUser } = RandomUser();

  if (loading) {
    return "Caricamento Utenti";
  }
  if (error || !user) {
    return "Errore: prova a ricaricare la pagina";
  }

  const { first_name, last_name, username, email, avatar, date_of_birth } =
    user;

  return (
    <div>
      <h1>Users:</h1>
      <img src={avatar} alt="User's avatar" />
      <h2>Username: {username}</h2>
      <h3>Name: {first_name}</h3>
      <h3>Surname: {last_name}</h3>
      <h4>Email: {email}</h4>

      <h4>Birthday: {date_of_birth}</h4>
      <button onClick={() => fetchUser()}>
        Fetch another User
      </button>
    </div>
  );
};

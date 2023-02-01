import styles from "../../styles/Pages.module.scss";

export default function Posts({ users }) {
  return (
    <div className={styles.Pages}>
      <div className={styles.Pages__users}>
        {users && users.map((user) => 
        <h3 key={user.id}> {user.firstName} </h3>
        )}
      </div>
      
    </div>
  );
};

export async function getStaticProps() {
  const resUsers = await fetch("https://dummyjson.com/users");
  const dataUsers = await resUsers.json();

  return {
    props: {
      users: dataUsers.users,
    },
  };
};

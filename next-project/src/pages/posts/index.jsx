import styles from "../../styles/Pages.module.scss";

export default function Posts({ posts }) {
  return (
    <div className={styles.Pages}>
      <div className={styles.Pages__posts}>
        {posts && posts.map((post) => 
        <h3 key={post.id}> {post.title} </h3>
        )}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const resPosts = await fetch("https://dummyjson.com/posts");
  const dataPosts = await resPosts.json();

  return {
    props: {
      posts: dataPosts.posts,
    },
  };
};

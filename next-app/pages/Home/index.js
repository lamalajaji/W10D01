import Link from "next/link";
function Home({ posts }) {
  return (
    <div>
    {posts.map((post)=>{
      return (
        <Link href={`/Home/${post.id}`}>
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        </Link>
      );
    })}
    </div>
  );
}

export default Home

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

// export async function getStaticPaths() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// const posts = await res.json();
//   const paths = posts.map((post) => ({
//     params: { id: post.id.toString() },
//   }));

//   return { paths, fallback: false };
// }




   


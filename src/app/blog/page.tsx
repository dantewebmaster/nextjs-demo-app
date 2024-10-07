import type { IPost } from "@/types/post";
import Link from "next/link";

export default async function BlogPage() {
  // get static props
  // const res = await fetch(`${process.env.API}/posts`);
  // const posts: Post[] = await res.json();

  // get server side props
  const res = await fetch(`${process.env.API}/posts`, {
    cache: "no-store",
  });
  const posts: IPost[] = await res.json();

  return (
    <div>
      <h1 className="text-4xl my-4 text-green-400">Blog Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="border border-gray-500 p-4 mb-2">
            <h2 className="text-2xl">{post.title}</h2>
            <p className="my-3">{post.body}</p>
            <Link
              className="hover:underline text-xl mb-2 border p-2 rounded-md"
              href={`/blog/${post.id}`}
            >
              ver post
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// exemplo com pages router
// export async function getStaticProps() {
//   const res = await fetch(`${process.env.API}/posts`);
//   const posts = await res.json();

//   return {
//     props: {
//       posts, // Passa os posts como props
//     },
//     revalidate: 10, // (opcional) revalida a cada 10 segundos
//   };
// }

import { IPost } from "@/types/post";
import Link from "next/link";

export default async function ParallelBlogPage() {
  const res = await fetch(`${process.env.API}/posts`, {
    cache: "no-store",
  });
  const parallelPosts: IPost[] = await res.json();

  return (
    <div>
      <h1 className="text-4xl text-blue-400">Parallel Blog Page</h1>
      <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {parallelPosts.map((post) => (
          <Link
            key={post.id}
            href={`/parallel-blog/${post.id}`}
            className="block border border-gray-500 p-4 mb-2"
          >
            <li>{post.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

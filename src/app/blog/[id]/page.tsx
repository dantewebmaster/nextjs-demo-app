import { Post } from "@/types/post";

export default async function PostPage({ params }: { params: { id: string } }) {
  const res = await fetch(`${process.env.API}/posts/${params.id}`);
  const post: Post = await res.json();

  return (
    <article>
      <h1 className="text-4xl text-orange-400">{post.title}</h1>
      <hr className="my-4" />
      <p>{post.body}</p>
    </article>
  );
}

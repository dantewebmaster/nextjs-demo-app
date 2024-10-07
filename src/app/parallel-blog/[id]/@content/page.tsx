import { IPost } from "@/types/post";

export default async function ContentSection({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(`${process.env.API}/posts/${params.id}`);
  const post: IPost = await res.json();

  return (
    <div>
      <h1 className="text-4xl text-white">{post.title}</h1>
      <hr className="my-4" />
      <p>{post.body}</p>
    </div>
  );
}

import type { IPostComment } from "@/types/post";

export default async function CommentsSection({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(`${process.env.API}/posts/${params.id}/comments`);
  const comments: IPostComment[] = await res.json();

  return (
    <div>
      <h3 className="text-xl text-white">Comments: </h3>
      <div className="my-4 border p-4">
        <ul className="[&>li]:py-4 [&>li]:border-b">
          {comments.map((comment) => (
            <li key={comment.id} className="py-4 border-b flex flex-col">
              {comment.body}
              <span className="text-sm border border-slate-400 p-2 mt-2">
                comment by: {comment.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

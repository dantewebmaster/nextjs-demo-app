export default function ParallelBlogLayout({
  children,
  content,
  comments,
}: {
  children: React.ReactNode;
  content: React.ReactNode;
  comments: React.ReactNode;
}) {
  return (
    <div>
      <section className="my-4 bg-red-600 p-4">{children}</section>
      <section className="my-4 bg-green-700 p-4">{content}</section>
      <section className="my-4 bg-blue-800 p-4">{comments}</section>
    </div>
  );
}

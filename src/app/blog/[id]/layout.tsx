import { BackButton } from "@/components/back-button";
import type { IPost } from "@/types/post";

// é possivel gerar metadados da página de forma dinâmica com o generateMetadata
export async function generateMetadata({ params }: { params: { id: string } }) {
  const res = await fetch(`${process.env.API}/posts/${params.id}`);
  const post: IPost = await res.json();

  return {
    title: post.title,
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BackButton />
      <main>{children}</main>
    </>
  );
}

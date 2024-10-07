import { BackButton } from "@/components/back-button";
import type { IProduct } from "@/types/product";

// é possivel gerar metadados da página de forma dinâmica com o generateMetadata
export async function generateMetadata({ params }: { params: { id: string } }) {
  const res = await fetch(`${process.env.PRODUCTS_API}/products/${params.id}`);
  const product: IProduct = await res.json();

  return {
    title: `${product.name} ${product.category} | Product`,
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

import type { IProduct } from "@/types/product";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(`${process.env.PRODUCTS_API}/products/${params.id}`);
  const product: IProduct = await res.json();

  return (
    <article>
      <h1 className="text-4xl text-orange-400">{product.name}</h1>
      <hr className="my-4" />
      <p>{product.description}</p>
    </article>
  );
}

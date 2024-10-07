import { formatMoney } from "@/lib/utils/format";
import type { IProduct } from "@/types/product";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(`${process.env.PRODUCTS_API}/products/${params.id}`, {
    cache: "no-store",
  });
  const product: IProduct = await res.json();

  return (
    <article>
      <h1 className="text-4xl text-orange-400">{product.name}</h1>
      <div className="mt-2">
        Categoria:
        <span className="font-bold bg-teal-600 text-white inline-block px-4 py-1 rounded-full ml-2">
          {product.category}
        </span>
        <span className="font-bold bg-gray-600 text-white inline-block px-4 py-1 rounded-full ml-2">
          {product.inStock ? "Em estoque" : "Fora de estoque"}
        </span>
      </div>
      <hr className="my-4" />
      <p>{product.description}</p>
      <p className="my-4 text-3xl">{formatMoney(product.price)}</p>
    </article>
  );
}

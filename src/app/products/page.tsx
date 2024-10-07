import Link from "next/link";

import type { IProduct } from "@/types/product";
import { formatMoney } from "@/lib/utils/format";

export default async function ProductsPage() {
  const res = await fetch(`${process.env.PRODUCTS_API}/products`, {
    cache: "no-store",
  });

  const products: IProduct[] = await res.json();

  return (
    <div>
      <h1 className="text-4xl my-4 text-teal-400">Products Page</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((product) => (
          <li key={product.id} className="border border-gray-500 p-4 mb-2">
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="my-3">{product.description}</p>
            <p className="font-bold mb-4 text-green-500">
              {formatMoney(product.price)}
            </p>
            <Link
              className="hover:underline text-xl mb-2 border p-2 rounded-md"
              href={`/products/${product.id}`}
            >
              ver produto
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

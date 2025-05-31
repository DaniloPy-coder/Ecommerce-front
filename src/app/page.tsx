import { ProductType } from "../types/ProductType";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products", { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const products: ProductType[] = await getProducts();
  console.log(products);

  return (
    <div className="max-w-7xl mx-auto pt-8 px-8 xl:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-6">
        {products.map((product: ProductType) => (
          <div key={product.id} className="border p-4 rounded">
            <img
              src={product.image}
              alt={product.title}
              className="h-40 object-contain mb-2"
            />
            <h2 className="font-semibold">{product.title}</h2>
            <p className="text-sm text-gray-600">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

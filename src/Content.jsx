import { ProductsIndex } from "./ProductsIndex";

export function Content() {
  const products = [
    {id: 1, name: "book", price: 15.00, description: "a book you can read", inventory: 5},
    {id: 2, name: "shirt", price: 15.00, description: "a shirt you can wear", inventory: 10}
  ]

  return (
    <div>
      <ProductsIndex products={products}/>
    </div>
  );
}
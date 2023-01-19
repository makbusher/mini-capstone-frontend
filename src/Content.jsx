import { ProductsIndex } from "./ProductsIndex";
import axios from 'axios';
import { useState, useEffect } from "react";
import { Signup } from "./Signup";


export function Content() {
  const [products, setProducts] = useState([]);

  const handleProductsIndex = () => {
    console.log("handleProductsIndex");
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  useEffect(handleProductsIndex, []);

  return (
    <div>
      <Signup />
      <br/>
      <hr />
      <ProductsIndex products={products}/>
    </div>
  );
}
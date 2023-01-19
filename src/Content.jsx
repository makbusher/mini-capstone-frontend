import { ProductsIndex } from "./ProductsIndex";
import axios from 'axios';
import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { ProductsNew } from "./ProductsNew";


export function Content() {
  const [products, setProducts] = useState([]);

  const handleProductsIndex = () => {
    console.log("handleProductsIndex");
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  const handleCreateProduct = (params, successCallback) => {
    console.log("handleCreateProduct", params);
    axios.post("http://localhost:3000/products.json", params).then((response) => {
      setProducts([...products, response.data]);
      successCallback();
    });
  };

  useEffect(handleProductsIndex, []);

  return (
    <div>
      <Login />
      <hr/>
      <Signup />
      <hr />
      <LogoutLink />
      <br/>
      <hr />
      <ProductsNew onCreateProduct={handleCreateProduct} />
      <br/>
      <hr />
      <ProductsIndex products={products}/>
    </div>
  );
}
export function ProductsIndex(props) {
  return (
    <div>
      <h1>All Products</h1>
      {props.products.map((product) => (
        <div className="products" key={product.id}> 
          <h2>{product.name}</h2>
          <p>Price: {product.price}</p>
          <p>Description: {product.description}</p>
          <p>Inventory: {product.inventory}</p>
          {product['images'].map(image => (
            <div> 
              <img src={image.url} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
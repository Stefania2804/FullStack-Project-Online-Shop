function ProductCard({ product }) {
  return (
    <div
      className={`product-card ${
        product.stock === 0 ? "out-of-stock" : ""
      }`}
    >
      <h2>{product.name}</h2>

      <p className="category">
        {product.category_name}
      </p>

      <p className="price">
        {Number(product.price).toFixed(2)} RON
      </p>

      <p className="stock">
        Stoc: {product.stock}
      </p>

      {product.stock === 0 && (
        <span className="badge">
          Stoc epuizat
        </span>
      )}
    </div>
  );
}

export default ProductCard;

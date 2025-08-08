import React, { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = () => {
    setIsLoading(true);
    // Simular añadir al carrito
    setTimeout(() => {
      setIsLoading(false);
      alert(`${product.name} añadido al carrito`);
    }, 1000);
  };

  const isOutOfStock = product.stock === 0 || (selectedVariant && selectedVariant.stock === 0);

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={product.image || '/placeholder-image.jpg'} 
          alt={product.name}
          className="product-image"
        />
        {isOutOfStock && <div className="out-of-stock-badge">Agotado</div>}
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        
        <div className="product-price">
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="original-price">${product.originalPrice}</span>
          )}
          <span className="current-price">${product.price}</span>
        </div>

        {product.variants && product.variants.length > 0 && (
          <div className="product-variants">
            <label htmlFor="variant-select">Variante:</label>
            <select 
              id="variant-select"
              value={selectedVariant?.id || ''}
              onChange={(e) => {
                const variant = product.variants.find(v => v.id === e.target.value);
                setSelectedVariant(variant);
              }}
              className="variant-select"
            >
              {product.variants.map(variant => (
                <option key={variant.id} value={variant.id}>
                  {variant.name} {variant.stock === 0 ? '(Agotado)' : ''}
                </option>
              ))}
            </select>
          </div>
        )}

        <button
          className={`add-to-cart-btn ${isOutOfStock ? 'out-of-stock' : ''} ${isLoading ? 'loading' : ''}`}
          onClick={handleAddToCart}
          disabled={isOutOfStock || isLoading}
        >
          {isLoading ? 'Añadiendo...' : isOutOfStock ? 'Agotado' : 'Añadir al Carrito'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
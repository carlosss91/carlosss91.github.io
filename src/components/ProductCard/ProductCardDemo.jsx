import React from 'react';
import ProductCard from './ProductCard';

const ProductCardDemo = () => {
  const sampleProducts = [
    {
      id: 1,
      name: "iPhone 14 Pro",
      price: 999,
      originalPrice: 1099,
      image: "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=300&h=200&fit=crop&auto=format",
      stock: 5,
      variants: [
        { id: "1", name: "128GB - Space Black", stock: 5 },
        { id: "2", name: "256GB - Deep Purple", stock: 3 },
        { id: "3", name: "512GB - Gold", stock: 0 }
      ]
    },
    {
      id: 2,
      name: "MacBook Air M2",
      price: 1199,
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=200&fit=crop&auto=format",
      stock: 0,
      variants: [
        { id: "4", name: "8GB RAM - 256GB SSD", stock: 0 },
        { id: "5", name: "16GB RAM - 512GB SSD", stock: 0 }
      ]
    },
    {
      id: 3,
      name: "AirPods Pro",
      price: 249,
      originalPrice: 279,
      image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=300&h=200&fit=crop&auto=format",
      stock: 10
    },
    {
      id: 4,
      name: "Nike Air Jordan",
      price: 180,
      originalPrice: 220,
      image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=300&h=200&fit=crop&auto=format",
      stock: 7,
      variants: [
        { id: "6", name: "Talla 42 - Blanco", stock: 3 },
        { id: "7", name: "Talla 43 - Negro", stock: 4 },
        { id: "8", name: "Talla 44 - Rojo", stock: 0 }
      ]
    },
    {
      id: 5,
      name: "Samsung Watch",
      price: 299,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop&auto=format",
      stock: 12,
      variants: [
        { id: "9", name: "40mm - Silver", stock: 6 },
        { id: "10", name: "44mm - Black", stock: 6 }
      ]
    },
    {
      id: 6,
      name: "Canon EOS R5",
      price: 2499,
      originalPrice: 2799,
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=300&h=200&fit=crop&auto=format",
      stock: 0
    }
  ];

  return (
    <div style={{ 
      padding: '2rem', 
      background: '#f8f9fa',
      minHeight: '100vh'
    }}>
      <h1 style={{ 
        textAlign: 'center', 
        marginBottom: '2rem', 
        color: '#2c3e50',
        fontSize: '2.5rem',
        fontWeight: 'bold'
      }}>
        Product Card Demo
      </h1>
      <p style={{ 
        textAlign: 'center', 
        marginBottom: '3rem', 
        color: '#7f8c8d',
        fontSize: '1.1rem'
      }}>
        Componente de tarjeta de producto responsive con variantes y estados
      </p>
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {sampleProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductCardDemo;
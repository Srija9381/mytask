import React from 'react';

const ProductDetail = ({ product, onClose }) => {
    return (
        <div className="product-detail">
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
            <button className="close-button" onClick={onClose}>Close</button>
        </div>
    );
};

export default ProductDetail;
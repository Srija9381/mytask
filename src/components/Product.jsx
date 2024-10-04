import React from 'react';

const Product = ({ product, onDelete, onSelect }) => {
    return (
        <div className="product">
            <img src={product.image} alt={product.title} onClick={onSelect} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <button onClick={() => onDelete(product.id)}>Delete</button>
        </div>
    );
};

export default Product;
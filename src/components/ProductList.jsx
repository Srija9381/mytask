import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './Product';
import ProductDetail from './ProductDetail';
import ProductForm from './ProductForm';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://fakestoreapi.com/products/${id}`);
            // After deletion, fetch the updated product list
            fetchProducts();
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const handleAddProduct = (product) => {
        setProducts((prevProducts) => [...prevProducts, product]);
        setShowForm(false);
    };

    return (
        <div>
            <h1>Product List</h1>
            <button onClick={() => setShowForm(true)}>Add New Product</button>
            {showForm && <ProductForm onAddProduct={handleAddProduct} />}
            <div className="product-grid">
                {products.map((product) => (
                    <Product
                        key={product.id}
                        product={product}
                        onDelete={handleDelete}
                        onSelect={() => setSelectedProduct(product)}
                    />
                ))}
            </div>
            {selectedProduct && (
                <ProductDetail product={selectedProduct} onClose={() => setSelectedProduct(null)} />
            )}
        </div>
    );
};

export default ProductList;
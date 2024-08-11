import React, { useEffect, useState } from 'react';
import './Products.scss';
import axios from '../../api/axios';
import { NavLink } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios('/products')
            .then((response) => {
                setProducts(response.data);
                setLoading(false); 
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setLoading(false); 
            });
    }, []);

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return (
            <div className='loading'>
                <div className='spinner'></div>
                <p>Loading products...</p>
            </div>
        );
    }

    return (
        <div id='products' className='products'>
            <div className='container'>
                <input 
                    type="text" 
                    placeholder="Search products..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className='search-input'
                />
                <div className="products-wrapper">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="products-item">
                            <NavLink to={`/product/${product.id}`}>
                                <img style={{width: '280px', height: '300px'}} src={product.image} alt={product.title} />
                            </NavLink>
                            <div className='products-info'>
                                <h3>{product.title.slice(0, 30) + '...'}</h3>
                                <p className='products-description'>{product.description.slice(0, 50) + "..."}</p>
                                <p className='products-price'>Price: {product.price}$</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Products;

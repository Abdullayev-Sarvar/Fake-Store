import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../api/axios';
import './product.scss';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios(`/products/${id}`)
            .then((response) => setProduct(response.data));
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (
        <div className='product-details'>
            <div className='container'>
                <div className='product-wrapper'>
                    <img style={{width: '400px', height: '450px'}} src={product.image} alt={product.title} />
                    <div className='product-info'>
                        <h1 className='product-title'>{product.title}</h1>
                        <p className='product-description'>{product.description}</p>
                        <p className='product-price'>Price: {product.price}</p>
                        <p className='product-category'>Category: {product.category}</p>
                        <div className='product-ratings'>
                            <span className='product-rating'>Product Rating: {product.rating.rate}.</span>
                            <span className='product-rating'>Product Count: {product.rating.count}.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;

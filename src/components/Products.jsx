import React from 'react';
import {popularProducts} from '../data';
import ProductCard from './ProductCard';
import './products.css'

function Products() {
  return <div className='products-container'>
      {popularProducts.map((item) => (
              <ProductCard product={item} key={item.id} />
          ))}
  </div>;
}

export default Products;

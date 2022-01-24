import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react';
import './products.css'
function ProductCard(props) {
  return <div className='product-card'>
      <img alt='product' className='product-image' src={props.product.img}></img>
      <div className="product-icons">
        <ShoppingCartOutlined />
        <FavoriteBorderOutlined />
        <SearchOutlined />
      </div>
  </div>;
}

export default ProductCard;

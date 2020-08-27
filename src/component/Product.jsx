import React from 'react'
import ProductItem from '../component/ProductItem'

const Product = () => {
    return (
        <ul className="product-list">
                {content.map(data=><li className="product-item" key={data.id}><ProductItem data={data} /></li>)}       
        </ul>
    )
}

export default Product;

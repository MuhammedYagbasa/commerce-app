import React from 'react'
import ProductCart from './ProductCart'

function ProductList({ data }) {
    return (
        <>
            {data.map((item,index) => (
                <ProductCart key={index} item={item} />
            ))}
        </>
    )
}

export default ProductList
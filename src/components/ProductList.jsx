import React from 'react'
import ProductCard from './ProductCard'

function ProductList({ products }) {

  if (!products || products.length === 0) {
    return <p className="text-gray-500 mt-4 text-lg">No products found.</p>;
  }
  
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4'>
        {
            products.map((product) => 
                <ProductCard product={product} />
            ) 
        }
    </div>
  )
}

export default ProductList
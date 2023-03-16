import React from 'react'
import ProductCard from '../components/ProductCard'
import useProducts from '../hooks/useProducts'
export default function Products() {
  // const {
  //   isLoading,
  //   error,
  //   data: products,
  // } = useQuery(['product'], getProducts)

  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts()

  return (
    <>
      {isLoading && <p>Loading.........</p>}
      {error && <p>{error}</p>}
      <ul className='grid gird-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </>
  )
}

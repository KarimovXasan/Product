import React, { useEffect, useState } from 'react'
import axiosBaseUrl from '../api/api'
import { useDispatch } from 'react-redux'
import { addCart } from '../app/Slice/cardSlice'

const Product = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    setLoading(true)
    const data = await axiosBaseUrl.get('/products');
    setProducts(data.data)
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  const dispatch = useDispatch()

  return (
    <section>
      <div className='container'>
        <h2 className='mb-10'>Products</h2>
        {
          loading ?
            <div>
              <div
                className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">
                <span
                  className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Loading...</span>
              </div>
              <div
                className="inline-block h-12 w-12 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
                role="status">
                <span
                  className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Loading...</span>
              </div>
            </div>
            : <ul className='container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-3'>
              {
                products.length > 1 && products.map((p, index) => {
                  return (
                    <li key={index} className='hover:shadow-lg p-4 rounded-lg cursor-pointer border border-gray-500 space-y-3'>
                      <div className='pl-3'>
                        <img src={p.image} alt={p.title} className='w-auto h-52 mx-auto' />
                      </div>
                      <div>
                        <h3 className='text-xl font-extrabold text-gray-700'>
                          {p.title.slice(0, 15)}
                        </h3>
                        <p>
                          {p.description.slice(0, 20)}
                        </p>
                      </div>
                      <div className='flex justify-between items-center'>
                        <span className='text-2xl font-bold'>{p.price}$</span>
                        <button onClick={() => dispatch(addCart(p))} className='bg-yellow-500 text-white py-2 font-bold px-5 text-sm active:scale-95 rounded-xl'>add to cart</button>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
        }
      </div>
    </section>
  )
}

export default Product
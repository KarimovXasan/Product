import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletCart } from '../app/Slice/cardSlice';

const Product = () => {

    const data = useSelector((store) => store.cart.value);

    const dispatch = useDispatch()

    return (
        <section>
            <div className='container'>
                <h2 className='mb-10'>Cart</h2>
                <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    {data.length > 1 && data.map((p, index) => {
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
                                    <span className='text-2xl font-bold'>{p.price}UZS</span>
                                    <button onClick={() => dispatch(deletCart(p.id))} className='bg-yellow-500 text-white py-2 font-bold px-5 text-sm active:scale-95'>Delete item</button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Product
import React from 'react'

const Navbar = () => {
  return (
    <header>
        <div className='container flex justify-between py-8'>
            <a className='text-2xl font-bold ' href="#">Logo</a>
            <button className='bg-yellow-400 px-5 py-2 rounded-md'>Cart | {}</button>
        </div>
    </header>
  )
}

export default Navbar
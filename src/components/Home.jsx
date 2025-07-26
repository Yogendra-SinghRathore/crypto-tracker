import React, { useState } from 'react';
import CryptoList from './CryptoList';

const Home = ({favorites,setFavorites}) => {

  const [search,setSearch] = useState('');

  return (
    <div className='p-4'>
      {/* <h1 className='text-3xl font-bold'>Welcome to Crypto Tracker</h1> */}
      <input type="search" placeholder='Search here...' value={search} onChange={(e) => setSearch(e.target.value)} className='border border-gray-300 w-[1200px] mt-4 ml-4 p-4 text-2xl rounded-2xl' />
      <CryptoList search={search} favorites={favorites} setFavorites={setFavorites} />
    </div>
  )
}

export default Home
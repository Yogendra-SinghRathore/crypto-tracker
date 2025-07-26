import React from 'react'
import { useNavigate } from 'react-router-dom';

const Faovorites = ({favorites,setFavorites}) => {

  const navigate = useNavigate();

  function handleOnclick(coin)
      {
        if(isFavorited(coin.id)){
          setFavorites(prev => prev.filter(item => item.id !== coin.id));
        }else{
          setFavorites(prev => [...prev,coin]);
        }
      }

      function isFavorited(id){
        return favorites.some((coin) => id === coin.id);
      }


  return (
    <div className="max-w-full mx-auto px-4 py-8">
      <h1 className='text-2xl font-bold mb-5'>💖 Your Favorite Coins</h1>
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full table-auto bg-white border border-gray-200">
          <thead className="bg-gray-300 text-gray-600 text-sm uppercase text-left ">
            <tr>
              <th className="py-5 px-6">Coin</th>
              <th className="py-5 px-6">Price</th>
              <th className="py-5 px-6">1h %</th>
              <th className="py-5 px-6">24h %</th>
              <th className="py-5 px-6">24h Volume</th>
            </tr>
          </thead>
          <tbody className="text-gray-800 text-sm divide-y divide-gray-100">

            {favorites.map((coin, index) => (
              <tr onClick={() => navigate(`/coin/${coin.id}`)} key={coin.id} className="hover:bg-gray-200 transition">
                <td className="py-3 px-6 flex items-center gap-3 ">
                  <button onClick={() => handleOnclick(coin)}> {isFavorited(coin.id) ? '⭐': '☆'} </button>
                  <span>{index+1}</span>
                  <img src={coin.image} alt={coin.name} className="w-6 h-6" />
                  <div>
                    <p className="font-medium">{coin.name}</p>
                    <p className="text-xs text-gray-400">{coin.symbol.toUpperCase()}</p>
                  </div>
                </td>
                <td className="py-3 px-6">${coin.current_price.toLocaleString()}</td>
                <td className="py-3 px-6">
                  <span className={coin.price_change_percentage_1h_in_currency > 0 ? "text-green-600" : "text-red-600"}>
                    {coin.price_change_percentage_1h_in_currency > 0 ? '🟢 ' : '🔻 '}
                    {coin.price_change_percentage_1h_in_currency?.toFixed(2)}%
                  </span>
                </td>
                <td className="py-3 px-6">
                  <span className={coin.price_change_percentage_24h_in_currency > 0 ? "text-green-600" : "text-red-600"}>
                    {coin.price_change_percentage_24h_in_currency > 0 ? '🟢 ' : '🔻 '}
                    {coin.price_change_percentage_24h_in_currency?.toFixed(2)}%
                  </span>
                </td>
                <td className="py-3 px-6">${coin.total_volume.toLocaleString()}</td>
              </tr>
            ) ) }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Faovorites

import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
const CoinDetails = () => {

  const {id} = useParams();
  const [coin,setCoin] = useState(null);
  const [loading,setLoading] = useState(true);

  useEffect(() => {

    const fetchCoinDetails = async () => {
      try{
        const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
        const data = await res.json();
        setCoin(data)
        setLoading(false);
      }catch (err){
        console.error("Failed to fetch coin details", err);
        setLoading(false)
      }
    };
    fetchCoinDetails();
  }, [id])
  
  if(loading) return <h1>Loading...</h1>
  if(!coin) return <h1>Coin Not Found !</h1>

  return (
    <div className='coin-details-container'>
      <div className="coin-details" style={{ maxWidth: "1200px", padding: "2rem" }}>
        <img src={coin.image.large} alt={coin.name} style={{ width: "100px" }} />
        <h1>{coin.name} ({coin.symbol.toUpperCase()})</h1>
    
        <p dangerouslySetInnerHTML={{ __html: coin.description.en?.split(". ")[0] + "." }} />
    
        <h3>💰 Current Price: ₹{coin.market_data.current_price.inr.toLocaleString()}</h3>
        <p>📈 24h High: ₹{coin.market_data.high_24h.inr.toLocaleString()}</p>
        <p>📉 24h Low: ₹{coin.market_data.low_24h.inr.toLocaleString()}</p>
        <p>📊 Market Cap: ₹{coin.market_data.market_cap.inr.toLocaleString()}</p>
    
        <a href={coin.links.homepage[0]} target="_blank" rel="noopener noreferrer">
          🔗 Visit Official Site
        </a>
        </div>
    </div>
    
  );
}

export default CoinDetails

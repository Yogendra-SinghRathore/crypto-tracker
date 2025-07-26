import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CoinDetails from "./components/CoinDetails";
import Favorites from "./components/Favorites";
import { useEffect, useState } from "react";



function App() {

  // const [favorites,setFavorites] = useState([]);

  const [favorites,setFavorites] = useState(() => {
    const storedData = localStorage.getItem('favorites');
    return storedData ? JSON.parse(storedData) : [] ;
  });

  useEffect(() => {
    localStorage.setItem('favorites',JSON.stringify(favorites))
  }, [favorites])

  const router = createBrowserRouter([
  {path:"/", element: ( <div> <Navbar/> <Home favorites={favorites} setFavorites={setFavorites} />  </div> ) },
  {path:"/coin/:id", element: ( <div> <Navbar/> <CoinDetails/>  </div> ) },
  {path:"/favorites", element: ( <div> <Navbar/> <Favorites favorites={favorites} setFavorites={setFavorites} />  </div> ) }
]);

  return (
    <div> 
      <RouterProvider router={router}/>
    </div>
  )
}

export default App




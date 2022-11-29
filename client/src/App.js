import NavBar from './Components/NavBar/NavBar'
import Billing from './Components/Billing/Billing'
import MapHotels from './Components/MapHotels/MapHotels';
import HotelDetails from './Components/HotelDetails/HotelDetails';
import ThemeBanner from './Components/ThemeBanner/ThemeBanner';
import WhyChooseUs from './Components/WhyChooseUs/WhyChooseUs';
import {Routes , Route} from 'react-router-dom'
import RestarauntMenu from './Components/MenuHotels/RestarauntMenu';
import { useState } from 'react';
import Cart from '../src/Components/Cart/Cart'

function App() {


  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <div>
      <NavBar size={cart.length}/>
      <Routes>
     <Route path='/' element={<ThemeBanner/>}/>     
     <Route path='/WhyChooseUs' element={<WhyChooseUs/>}/>     
     <Route path='/Searchbymap' element={<MapHotels/>}/>
     <Route path='/NearbyHotels' element={<HotelDetails/>}/>
     <Route path='/menu' element={<RestarauntMenu handleClick={handleClick}/>  }/>
     <Route path='/Cart' element={<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>}/>
     </Routes>
    </div>
  );
}

export default App;

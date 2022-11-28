import NavBar from './Components/NavBar/NavBar'
import Billing from './Components/Billing/Billing'
import MapHotels from './Components/MapHotels/MapHotels';
import HotelDetails from './Components/HotelDetails/HotelDetails';

function App() {
  return (
    <div>
      <NavBar/>
      {/* <Billing/> */}
      <MapHotels/>
      <HotelDetails/>
    </div>
  );
}

export default App;

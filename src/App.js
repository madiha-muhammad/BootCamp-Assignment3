import React from 'react';
import Breakfast from './breakfast';
import Dinner from './dinner';
import './App.css'; 
function App() {
  return(
    <div className="App">
      <Dinner selectedDish='Chicken Biryani' selectedKabab='Seekh Kabab'/>
      <Breakfast selectedSpecial='Halwa Poori' selectedPratha='Aaloo' selectedChanay='Murgh' selectedDrink='Sada Lassi'/>
    </div>
  )
}

export default App;

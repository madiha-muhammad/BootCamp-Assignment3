import React from 'react';
import Breakfast from './breakfast';
import Lunch from './lunch';
import Dinner from './dinner';
import './App.css'; 
function App() {
  return(
    <div className="App">
      <Breakfast selectedSpecial='Halwa Poori' selectedPratha='Aaloo' selectedChanay='Murgh' selectedDrink='Sada Lassi'/>
      <Lunch selectedSalad='Tex-Mex Pasta + Hummus &amp; Greek'/>
      <Dinner selectedDish='Chicken Biryani' selectedKabab='Seekh Kabab'/>
    </div>
  )
}

export default App;

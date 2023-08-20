import { Routes, Route } from 'react-router-dom'
import './App.css'

import Header from './Components/Header';
import HomePage from './Components/HomePage';
import HandSigns from './Components/HandSigns';
import CreateJutsu from './Components/CreateJutsu';
import VillagePage from './Components/Villages/VillagePage';
import LeafVillage from './Components/Villages/LeafVillage';
import SandVillage from './Components/Villages/SandVillage';
import CloudVillage from './Components/Villages/CloudVillage';
import EarthVillage from './Components/Villages/EarthVillage';
import WaterVillage from './Components/Villages/WaterVillage';
import RainVillage from './Components/Villages/RainVillage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/handSigns' element={<HandSigns/>} />
        <Route path='/createJutsu' element={<CreateJutsu/>} />
        <Route path='/villages' element={<VillagePage/>}>
          <Route path='villages/leafVillage' element={<LeafVillage/>} />
          <Route path='villages/sandVillage' element={<SandVillage/>} />
          <Route path='villages/cloudVillage' element={<CloudVillage/>} />
          <Route path='villages/earthVillage' element={<EarthVillage/>} />
          <Route path='villages/waterVillage' element={<WaterVillage/>} />
          <Route path='villages/rainVillage' element={<RainVillage/>} />
        </Route>
        <Route path='*' element={<HomePage/>} />
      </Routes>
    </div>
  );
}

export default App;

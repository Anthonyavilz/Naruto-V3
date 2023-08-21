import { Routes, Route } from 'react-router-dom'
import './App.css'

import Header from './Components/Header';
import HomePage from './Components/HomePage';
import HandSigns from './Components/HandSigns';
import CreateJutsu from './Components/CreateJutsu';
import VillagePage from './Components/VillagePage';
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
        <Route path='/villages'>
          <Route index element={<VillagePage/>} />
          <Route path='leafVillage' element={<LeafVillage/>} />
          <Route path='sandVillage' element={<SandVillage/>} />
          <Route path='cloudVillage' element={<CloudVillage/>} />
          <Route path='earthVillage' element={<EarthVillage/>} />
          <Route path='waterVillage' element={<WaterVillage/>} />
          <Route path='rainVillage' element={<RainVillage/>} />
        </Route>
        <Route path='*' element={<HomePage/>} />
      </Routes>
    </div>
  );
}

export default App;


// when I create the bigger project, doing like <Route index element={}/> with a defined path above like <Route path='/naruto'/> will work how I want the different projects to be nested. I would just have to double nest for the village map thing to work
import React from 'react';
import { BrowserRouter as BaseRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import GidleCard from './CardWebContainer/GidleCard';
import LesserafimCard from './CardWebContainer/LesserafimCard';
import IveCard from './CardWebContainer/IveCard';
import BlackpinkCard from './CardWebContainer/BlackpinkCard';
import Navbar from './MainWebPart/Navbar';
import NewjeanCard from './CardWebContainer/NewjeanCard';
import TwiceCard from './CardWebContainer/TwiceCard';


function App() {
  return (
    <BaseRouter>
      <div className="App">
        <Navbar/>
        <Routes>
        <Route path="/" element={<GidleCard/>}/>
        <Route path="/newjeans" element={<NewjeanCard/>}/>
        
        <Route path="/twice" element={<TwiceCard/>}/>
        <Route path="/lesserafim" element={<LesserafimCard/>}/>
        <Route path="/ive" element={<IveCard/>}/>
        <Route path="/blackpink" element={<BlackpinkCard/>}/>
        </Routes>
      </div>
    </BaseRouter>
    
  );
}

export default App;

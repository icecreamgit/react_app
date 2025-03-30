import React from 'react';
import MainCard from './components/MainCard'
import { Routes, Route, Link } from "react-router-dom"
import FunctionalElement from './components/FunctionalElement';

const App = () => {
  const handleConsoleLogNum = (num: number) => {
      console.log(num)
  }

  return (
    <div>
      <header>
        <Link to="/">MainCard</Link>
        <Link to="/FunctionalElement">FunctionalElement</Link>
      </header>
        <Routes>
            <Route path="/" element={<MainCard  width={'100%'} height={'100%'} handleConsoleLogNum={handleConsoleLogNum} />} />
            <Route path='/FunctionalElement' element={<FunctionalElement name='Aboba' />} />
        </Routes>
    </div>
  );
}


export default App;

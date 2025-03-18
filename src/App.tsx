import React from 'react';
import MainCard from './components/MainCard'
//import './App.css';

const App = () => {
  const handleConsoleLogNum = (num: number) => {
      console.log(num)
  }

  return (
    <div>
        <MainCard 
            width={'100%'}
            height={'100%'}
            handleConsoleLogNum={handleConsoleLogNum}>
        </MainCard>
    </div>
  )
}


export default App;

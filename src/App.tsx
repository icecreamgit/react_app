import React from 'react';
import MainCard from './components/MainCard'
import './App.css';

const App = () => {
  const handleConsoleLogNum = (num: number) => {
      console.log(num)
  }

  return (
    <div>
        <MainCard 
            width={'400px'}
            height={'400px'}
            handleConsoleLogNum={handleConsoleLogNum}>
              <button>
                Перейти на следующую страницу
              </button>
        </MainCard>
    </div>
  )
}


export default App;

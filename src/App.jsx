import './App.css'
import AppButton from './components/AppButton';
import Counter from './components/Counter';
import freeCodeCampLogo from './images/freeCodeCamp-logo.svg';
import { useState } from 'react';

function App() {
  const [clicksNumber, setClicksNumber] = useState(0);

  const handleClick = () => {
    setClicksNumber(prevClicks => prevClicks + 1)
  };

  const handleReset = () => {
    setClicksNumber(0);
  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo-container'>
        <img 
          className='freecodecamp-logo' 
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp'
        />
      </div>
      <div className='main-container'>
        <Counter clicksNumber={clicksNumber} />
        <AppButton 
          text='Click'
          isItAClickButton={true}
          handleClick={handleClick}
        />
        <AppButton 
          text='Reset'
          isItAClickButton={false}
          handleClick={handleReset}
        />
      </div>

      
    </div>
  )
}

export default App

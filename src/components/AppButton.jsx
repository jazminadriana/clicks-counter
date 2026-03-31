import React from 'react';
import '../style-sheets/AppButton.css';

function AppButton({text, isItAClickButton, handleClick}) {
  return (
    <button className={ isItAClickButton ? 'click-button' : 'reset-button' } 
      onClick= {handleClick}
    >  
      {text}
    </button>
  )       
}

export default AppButton;
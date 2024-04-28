import React, {useContext} from 'react'
import ContextProvider from './ContextProvider.jsx'
import Context from './Context.jsx'

//Components
import PrincipalMenu from './components/PrincipalMenu.jsx'
import Game from './components/Game.jsx'

import './App.css'

const GameContext = () => {
  const {isPrincipalMenuVisible} = useContext(Context)
  return(
    <>
      {isPrincipalMenuVisible ?
        <PrincipalMenu /> : 
        <Game />
      }
    </>
  )
}

const App = () => {
  
  return (
    <ContextProvider>
      <GameContext />
    </ContextProvider>
  );
};



export default App;


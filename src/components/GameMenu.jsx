import React, {useContext} from 'react'
import Context from '../Context.jsx'

const Button = ({btnText, className, onClick}) => {
  return(
    <div class={className} onClick={onClick}>{btnText}</div>
  )
}

const GameMenu = ({className}) => {
  
  const {closeGameMenu, backToPrincipalMenu, restart} = useContext(Context)
  
  return(
    <div class={className}>
      <div class='game-menu'>
        <h1>pause</h1>
        <Button btnText={'Continue'} className={'continue-btn'} onClick={closeGameMenu}/>
        <Button btnText={'Restart'} className={'restart-btn'} onClick={restart}/>
        <Button btnText={'Quit Game'} className={'quit-game-btn'} onClick={backToPrincipalMenu}/>
      </div>
    </div>
  )
}

export default GameMenu
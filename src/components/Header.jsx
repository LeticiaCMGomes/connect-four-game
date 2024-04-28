import React, {useContext} from 'react'
import Context from '../Context.jsx'

//Imagens
import Logo from '../../assets/logo.svg'

const Button = ({btnText, className, onClick}) => {
  return(
    <div class={className} onClick
    ={onClick}>{btnText}</div>
  )
}

const Header = () => {
  
  const {showGameMenu} = useContext(Context)
  
  const {restart} = useContext(Context)
  
  return(
    <header class='header'>
      <Button btnText={'Menu'} className={'game-menu-btn'} onClick={showGameMenu}/>
      <img src={Logo} alt="Logo Image" />
      <Button btnText={'Restart'} className={'restart-btn'} onClick={restart}/>
    </header>
  )
}

export default Header
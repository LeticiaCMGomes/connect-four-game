import React, {useContext, useEffect} from 'react'
import Context from '../Context.jsx'

//Images 
import TurnBackgroundRed from '../../assets/turn-background-red.svg'
import TurnBackgroundYellow from '../../assets/turn-background-yellow.svg'

const TimerModal = () => {
  
  const {timer, setTimer} = useContext(Context)
  
  const {turn} = useContext(Context)
  
  const {setWinner} = useContext(Context)
  
  const {checkWinner} = useContext(Context)
  
  const {playerOneScore, setPlayerOneScore} = useContext(Context)
  
  const {playerTwoScore, setPlayerTwoScore} = useContext(Context)
  
  const {isGameMenuVisible} = useContext(Context)
  
  useEffect(() => {
    if(timer > 0 && !isGameMenuVisible){
      let interval = setInterval(() => {
        setTimer(timer - 1)
      }, 1000)
      
      return () => clearInterval(interval)
    }
    
    if (timer == 0) {
      let updateWinner = turn == 'X' ? 'O' : 'X';

      checkWinner(updateWinner)
    }
    
  }, [timer])
  
  return(
    <div class='timer-container'>
      <strong class='text'>{turn == 'X' ? "player 1's turn" : "player 2's turn"}</strong>
      <strong class='timer'>{timer}</strong>
      <img src={turn == 'X' ? TurnBackgroundRed : TurnBackgroundYellow} />
    </div>
  )
}

export default TimerModal
import React, {useContext} from 'react'
import Context from '../Context.jsx'

//Image 
import PlayerOneImage from '../../assets/player-one.svg'
import PlayerTwoImage from '../../assets/player-two.svg'

const ScoreBox = ({score, text, image, className}) => {
  return(
    <div class={className}>
      <strong class='text'>{text}</strong>
      <strong class='score'>{score}</strong>
      <img src={image} />
    </div>
  )
}

const ScoreModal = () => {
  
  const {playerOneScore, playerTwoScore} = useContext(Context)
  
  return(
    <div class='score-modal'>
      <ScoreBox text={'player one'} score={playerOneScore} image={PlayerOneImage} className={'player-one-score'}/>
      <ScoreBox text={'player two'} score={playerTwoScore} image={PlayerTwoImage} className={'player-two-score'}/>
    </div>
  )
}

export default ScoreModal
import React, {useState, useEffect} from 'react'
import Context from './Context.jsx'

const ContextProvider = ({children}) => {
  
  const [isPrincipalMenuVisible, setIsPrincipalMenuVisible] = useState(true)
  
  const startGame = () => {
    setIsPrincipalMenuVisible(false)
  }
  
  const backToPrincipalMenu = () => {
    location.reload()
  }
  
  const [isRulesVisible, setIsRulesVisible] = useState(false)
  
  const showRules = () => {
    setIsRulesVisible(true)
  }
  
  const closeRules = () => {
    setIsRulesVisible(false)
  }
  
  const [isGameMenuVisible, setIsGameMenuVisible] = useState(false)
  
  const showGameMenu = () => {
    setIsGameMenuVisible(true)
  }
  
  const closeGameMenu = () => {
    setIsGameMenuVisible(false)
    setTimer(timer - 1) //FAZER TIMER ANDAR NOVAMENTE
  }
  
  const [playerOneScore, setPlayerOneScore] = useState(0)
  
  const [playerTwoScore, setPlayerTwoScore] = useState(0)
  
  const [board, setBoard] = useState(Array(6).fill().map(() => Array(7).fill(null)))
  
  const [winner, setWinner] = useState(null)
  
  const [isTie, setIsTie] = useState(false)
  
  const [turn, setTurn] = useState('X')
  
  const [timer, setTimer] = useState(30)
  
  const playAgain = () => {
    setTurn(winner == 'X' ? 'O' : 'X')
    setWinner(null)
    setBoard(Array(6).fill().map(() => Array(7).fill(null)))
    setTimer(30)
    setWinnerSequence([])
    setIsTie(false)
  }
  
  const restart = () => {
    setBoard(Array(6).fill().map(() => Array(7).fill(null)))
    setPlayerOneScore(0)
    setPlayerTwoScore(0)
    setTurn('X')
    setTimer(30)
    setWinner(null)
    setIsGameMenuVisible(false)
    setWinnerSequence([])
  }
  
  useEffect(() => {
    setTimer(30)
  }, [turn])
  
  const [winnerSequence, setWinnerSequence] = useState([])
  
  const  checkWinner =  (updateWinner) => {
    
    setWinner(updateWinner)
    
    if(updateWinner == 'X') {
      setPlayerOneScore(playerOneScore + 1)
    } else {
      setPlayerTwoScore(playerTwoScore + 1)
    }
  }
  
  const checkForVitory = () => {
    let updateWinner;
    let updateWinnerSequence;
    
    //HORIZONTAL
    for(var row = 0; row < 6; row++) {
      for(var col = 0; col < 4; col++) {
        if(board[row][col] && board[row][col] == board[row][col+ 1] && board[row][col] == board[row][col + 2] && board[row][col] == board[row][col + 3]) {
          updateWinner = board[row][col]
          checkWinner(updateWinner)
          
          updateWinnerSequence = [[row, col], [row, col + 1], [row, col + 2], [row, col + 3]]
          setWinnerSequence(updateWinnerSequence)
          
        }
      }
    }
    
    //VERTICAL 
    for(var row = 0; row < 3; row++) {
      for(var col = 0; col < 7; col++) {
        if(board[row][col] && board[row][col] == board[row + 1][col] && board[row][col] == board[row + 2][col] && board[row][col] == board[row + 3][col]) {
          updateWinner = board[row][col]
          checkWinner(updateWinner)
          
          updateWinnerSequence = [[row, col], [row + 1, col], [row + 2, col], [row + 3, col]]
          setWinnerSequence(updateWinnerSequence)
          
        }
      }
    }
    
    //DIAGONAL (\)
    for(var row = 0; row < 3; row++) {
      for(var col = 0; col < 4; col++) {
        if(board[row][col] && board[row][col] == board[row + 1][col + 1] && board[row][col] == board[row + 2][col + 2] && board[row][col] == board[row + 3][col + 3]) {
          let updateWinner = board[row][col]
          checkWinner(updateWinner)
          
          updateWinnerSequence = [[row, col], [row + 1, col + 1], [row + 2, col + 2], [row + 3, col + 3]]
          setWinnerSequence(updateWinnerSequence)
          
        }
      }
    }
    
    //DIAGONAL (/)
    for(var row = 0; row < 3; row++) {
      for(var col = 0; col < 7; col++) {
        if(board[row][col] && board[row][col] == board[row + 1][col - 1] && board[row][col] == board[row + 2][col - 2] && board[row][col] == board[row + 3][col - 3]) {
          let updateWinner = board[row][col]
          checkWinner(updateWinner)
          
          updateWinnerSequence = [[row, col], [row + 1, col - 1], [row + 2, col - 2], [row + 3, col - 3]]
          setWinnerSequence(updateWinnerSequence)
          
        }
      }
    }
  }
  
  const checkTie = () => {
    let isFull = true;
    
    for(var row = 0; row < 6; row++) {
      for(var col = 0; col < 7; col++) {
        if(board[row][col] == null) {
          isFull = false
          break;
        }
      }
      if(isFull == false) {
        break;
      }
    }
    
    if(isFull == true) {
      setIsTie(true)
    }
    
  }
  
  useEffect(() => {
    checkForVitory()
    checkTie()
  }, [board])
  
  return(
    <Context.Provider value={{isPrincipalMenuVisible, setIsPrincipalMenuVisible, startGame, backToPrincipalMenu, isRulesVisible, setIsRulesVisible, showRules, closeRules, isGameMenuVisible, showGameMenu, closeGameMenu, playerOneScore, setPlayerOneScore, playerTwoScore, setPlayerTwoScore, board, setBoard, winner, setWinner, turn, setTurn, timer, setTimer, playAgain, restart, checkWinner, winnerSequence, setWinnerSequence, isTie}}>
      {children}
    </Context.Provider>
  )
}
export default ContextProvider
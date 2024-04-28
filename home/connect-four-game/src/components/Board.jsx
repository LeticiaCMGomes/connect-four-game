import React, {useContext} from 'react'
import Context from '../Context.jsx'

//Images 
import RedPiece from '../../assets/counter-red-small.svg'
import YellowPiece from '../../assets/counter-yellow-small.svg'

const Board = () => {
  
  const {board, setBoard} = useContext(Context)
  
  const {turn, setTurn} = useContext(Context)
  
  const {winner} = useContext(Context)
  
  const setPiece = (colIndex) => {
    let rowIndex = undefined;
    
    for(var i = board.length - 1; i >= 0; i--) {
      if(board[i][colIndex] == null) {
        rowIndex = i;
        break;
      }
    }
    
    if(rowIndex != undefined) {
      let updateBoard = [...board]
      updateBoard[rowIndex][colIndex] = turn
      setBoard(updateBoard)
      setTurn(turn == 'X' ? 'O' : 'X')
    }
  }
  
  const {winnerSequence} = useContext(Context)
  
  return(
    <div class='board'>
      {board.map((row, rowIndex) => row.map((col, colIndex) => {
        return(
          <div class='slot' onClick={() => {!winner ? setPiece(colIndex) : null}}>
            {board[rowIndex][colIndex] && 
              <img src={board[rowIndex][colIndex] == 'X' ? RedPiece : YellowPiece} class='piece'/>
            }
          
            {winnerSequence.map((indexes) => {
                if(indexes[0] == rowIndex && indexes[1] == colIndex) {
                return (
                <div class='winner-marker'> </div>
                )
                }
              })
            
            }
          </div>
        )
      }))
      }
    </div>
  )
}

export default Board
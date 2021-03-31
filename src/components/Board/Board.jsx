import React, { useState } from 'react'
import BoardPresenter from './BoardPresenter'

export default function Board() {

    const [boardState, setBoardState] = useState(
        [
            '-', '-', '-', '-', '-', '-', '-', '-',
            '-', '-', '-', '-', '-', '-', '-', '-',
            '-', '-', '-', '-', '-', '-', '-', '-',
            '-', '-', '-', '-', '-', '-', '-', '-',
            '-', '-', '-', '-', '-', '-', '-', '-',
            '-', '-', '-', '-', '-', '-', '-', '-',
            '-', '-', '-', '-', '-', '-', '-', '-',
            '-', '-', '-', '-', '-', '-', '-', '-',
        ]
    )
    const [userTurn, setUserTurn] = useState("x")
    
    const clickPosition = (pos)=>{
        console.log(pos)
        if(boardState[pos] === "-") {
            let newBoard = boardState
            newBoard[pos] = userTurn
            setBoardState(newBoard)
            const newUserTurn = userTurn==="x"?"o":"x"
            setUserTurn(newUserTurn)
        }
    }

    return <BoardPresenter allStatus={boardState} clickPosition={clickPosition}/>
}
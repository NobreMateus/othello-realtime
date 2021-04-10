import React, { useState, useEffect, useContext } from 'react'
import BoardPresenter from './BoardPresenter'
import { ConnectionContext } from '../../providers/ConnectionProvider'

export default function Board() {

    const { connectionManager } = useContext(ConnectionContext)
    const [boardState, setBoardState] = useState(
        [
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
        ]
    )
    const [userTurn, setUserTurn] = useState("x")
    
    useEffect(()=>{
        connectionManager.configGame(setBoardState, setUserTurn)
    }, [])

    const clickPosition = (x, y)=>{
        connectionManager.updateGame(boardState, userTurn, x, y)
    }

    return <BoardPresenter statusMatrix={boardState} clickPosition={clickPosition}/>
}
import React, { useState, useEffect } from 'react'
import BoardPresenter from './BoardPresenter'

import { io } from "socket.io-client";
const socket = io("http://localhost:4000")

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
    
    useEffect(()=>{
        

        socket.on("connect", ()=>{
            console.log("Conectei")
        })
        socket.on("New Room", ()=>{
            console.log("Entrei em uma sala")
        })

        socket.on("updateBoardState", (data) => {
            console.log(data)
            setBoardState(data.gameState)
            setUserTurn(data.playerTurn)
        })

    }, [])
    
    
    const clickPosition = (pos)=>{
        console.log(pos)
        if(boardState[pos] === "-") {
            // let newBoard = boardState
            // newBoard[pos] = userTurn
            // setBoardState(newBoard)
            // const newUserTurn = userTurn==="x"?"o":"x"
            // setUserTurn(newUserTurn)
            socket.emit("updateGame", {
                pos: pos,
                user: userTurn
            })
        }
    }

    return <BoardPresenter allStatus={boardState} clickPosition={clickPosition}/>
}
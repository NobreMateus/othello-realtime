import React, { useState, useEffect } from 'react'
import BoardPresenter from './BoardPresenter'

import { io } from "socket.io-client";
// const socket = io("http://localhost:4000")

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
    
    // const roomName = "first room"
    
    useEffect(()=>{
        
        // socket.on("connect", ()=>{
        //     console.log("Conectei")
        // })

        // socket.on("startGame", (data)=>{
        //     console.log("Jogo Iniciado")
        //     setBoardState(data.gameState)
        //     setUserTurn(data.userTurn)
        // })

        // socket.on("updateBoardState", (data) => {
        //     setBoardState(data.gameState)
        //     setUserTurn(data.userTurn)
        // })

        // socket.emit("enterRoom", {
        //     roomName: roomName
        // })

    }, [])

    const clickPosition = (pos)=>{
        // if(boardState[pos] === "-") {
        //     socket.emit("updateGame", {
        //         pos: pos,
        //         userTurn: userTurn,
        //         roomName: roomName
        //     })
        //     userTurn==='x'?setUserTurn('o'):setUserTurn('x')
        // }
    }

    return <BoardPresenter allStatus={boardState} clickPosition={clickPosition}/>
}
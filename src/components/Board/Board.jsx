import React, { useState, useEffect, useContext } from 'react'
import BoardPresenter from './BoardPresenter'
import { ConnectionContext } from '../../providers/ConnectionProvider'

export default function Board() {

    const { connectionManager } = useContext(ConnectionContext)
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
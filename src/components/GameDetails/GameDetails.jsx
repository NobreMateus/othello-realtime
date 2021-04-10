import React, { useState, useContext, useEffect } from 'react'
import GameDetailsPresenter from './GameDetailsPresenter'
import { ConnectionContext } from '../../providers/ConnectionProvider'
import { useHistory } from "react-router-dom";

function GameDetails() {

    const history = useHistory();
    const { connectionManager } = useContext(ConnectionContext)
    const [turnTime, setTurnTime] = useState(30)

    const [user1Name, setUser1Name] = useState("Aguardando...")
    const [user2Name, setUser2Name] = useState("Aguardando...")
    const [user1Points, setUser1Points] = useState(0)
    const [user2Points, setUser2Points] = useState(0)
    const [roomName, setRoomName] = useState("")
    const [userTurnInd, setUserTurnInd] = useState('x')

    useEffect(()=>{
        connectionManager.configGameDetails(setUser1Name, setUser2Name, setUser1Points, setUser2Points, setRoomName, setUserTurnInd)
    }, [connectionManager])

    const giveUpGame = () => {
        history.push("/rooms")
        connectionManager.giveUpGame()
    }
    
    return (
        <GameDetailsPresenter 
            turnTime={turnTime} 
            player1Points={user1Points} 
            player2Points={user2Points} 
            user1Name={user1Name} 
            user2Name={user2Name} 
            roomName={roomName}
            giveUpGame = {giveUpGame}
            userTurnInd = {userTurnInd}
        />
    )
}

export default GameDetails

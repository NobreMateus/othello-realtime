import React, { useState, useContext } from 'react'
import GameDetailsPresenter from './GameDetailsPresenter'
import { ConnectionContext } from '../../providers/ConnectionProvider'
import { useHistory } from "react-router-dom";

function GameDetails() {

    const history = useHistory();
    const { connectionManager } = useContext(ConnectionContext)
    const [turnTime, setTurnTime] = useState(30)

    const giveUpGame = () => {
        history.push("/rooms")
        connectionManager.giveUpGame()
    }
    
    return (
        <GameDetailsPresenter 
            turnTime={turnTime} 
            player1Points={0} 
            player2Points={0} 
            user1Name={"Player 1"} 
            user2Name={"Player 2"} 
            roomName={"Sala 1"}
            giveUpGame = {giveUpGame}
        />
    )
}

export default GameDetails

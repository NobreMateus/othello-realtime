import React, { useState } from 'react'
import GameDetailsPresenter from './GameDetailsPresenter'

function GameDetails() {

    const [turnTime, setTurnTime] = useState(30)
    
    return (
        <GameDetailsPresenter 
            turnTime={turnTime} 
            player1Points={0} 
            player2Points={0} 
            user1Name={"Player 1"} 
            user2Name={"Player 2"} 
            roomName={"Sala 1"}
        />
    )
}

export default GameDetails

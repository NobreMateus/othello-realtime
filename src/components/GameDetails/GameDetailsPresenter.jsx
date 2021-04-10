import React from 'react'
import PrimaryButton from '../shared/PrimaryButton/PrimaryButton'
import styles from './game-details.module.css'
import { FaAngleLeft } from "react-icons/fa";

function GameDetailsPresenter(props) {
    return (
        <div className = {styles["details-container"]}>
            <div className={styles["roomname-area"]} >{props.roomName}</div>
            <div className={styles["info-area"]}>
                <div className={styles["players-area"]}>
                    <div className={styles["single-player-area"]}>
                        <span className={styles["points-indicator"]} style={{backgroundColor: "#845EC2"}}>{props.player1Points}</span>
                        <span>{props.user1Name}</span>
                        <span className={styles["player-type-indicator"]} style={{display: props.userTurnInd === 'x'?"block":"none"}}>
                            <FaAngleLeft size={30}></FaAngleLeft>
                        </span>
                    </div>
                    <div className={styles["single-player-area"]}>
                        <span className={styles["points-indicator"]} style={{backgroundColor: "#FFC75F"}}>{props.player2Points}</span>
                        <span>{props.user2Name}</span>
                        <span className={styles["player-type-indicator"]} style={{display: props.userTurnInd === 'o'?"block":"none"}}>
                            <FaAngleLeft size={30}></FaAngleLeft>
                        </span>
                    </div>
                </div>
                <div className={styles["cron-area"]} style={{color: props.turnTime<10 ? "red": "#121212" }} >00:{props.turnTime}</div>
            </div>
            <PrimaryButton text="Desistir" onClick={()=>{props.giveUpGame()}}/>
        </div>
    )
}

export default GameDetailsPresenter

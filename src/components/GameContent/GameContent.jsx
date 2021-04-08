import React, { useState } from "react"
import Board from "../Board/Board"
import Chat from "../Chat/Chat"
import styles from "./game-content.module.css"
import SocketManager from "../../model/SocketManager"

export default function GameContent() {

    // const [socketManager] = useState(new SocketManager("first room"))

    return <div className={styles["container"]}>
        <div className={styles["game-container"]}>
            <Board />
        </div>
        <div className={styles["info-container"]}>
            <div className={styles["details-container"]}>

            </div>
            <div className={styles["chat-container"]}>
                <Chat />
            </div>

        </div>
    </div>
}
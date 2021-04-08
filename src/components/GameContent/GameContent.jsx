import React, { useContext } from "react"
import Board from "../Board/Board"
import Chat from "../Chat/Chat"
import styles from "./game-content.module.css"
import { UserConContext } from "../../providers/UserConProvider"

export default function GameContent() {

    const { userName } = useContext(UserConContext)

    return <div className={styles["container"]}>
        <div className={styles["game-container"]}>
            <Board />
        </div>
        <div className={styles["info-container"]}>
            <div className={styles["details-container"]}>

            </div>
            <div className={styles["chat-container"]}>
                <Chat userName = {userName} />
            </div>

        </div>
    </div>
}
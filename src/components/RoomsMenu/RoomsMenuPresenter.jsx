import React from 'react'
import styles from './room-menu.module.css'
import PrimaryButon from '../shared/PrimaryButton/PrimaryButton'
import { Link } from 'react-router-dom'

export default function RoomsMenuPresenter(props){
    return <div className={styles["container"]}>
        <div className={styles["rooms-area"]}>
            <div className={styles["rooms-header"]}>
                <div>Nome da Sala</div>
                <div>Q. de Jogadores</div>
            </div>
            {props.rooms.map( (room, num) => {
                return <div key={`roomLine${num}`} className={styles["line-room-container"]} style={{backgroundColor: room.selected?"#FFC75F":undefined }} onClick={()=>{props.selectRoom(room.id)}}>
                    <div className={styles["line-room-name"]}>{room.name}</div>
                    <div className={styles["line-room-amount"]}>{room.amountUsers}</div>
                </div>
            })}
        </div>
        <div className={styles["buttons-area"]}>
            <Link to="game" style={{width:"calc(50% - 8px)"}} onClick={()=>props.enterRoom()} >
                <PrimaryButon style={{width:"100%"}} text="Iniciar Jogo"/>
            </Link>
            <PrimaryButon style={{width:"calc(50% - 8px)"}} text="Criar Sala"/>
        </div>
    </div>
}
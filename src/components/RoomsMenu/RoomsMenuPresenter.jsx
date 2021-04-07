import React from 'react'
import styles from './room-menu.module.css'
import PrimaryButon from '../shared/PrimaryButton/PrimaryButton'
import { Link } from 'react-router-dom'

export default function RoomsMenuPresenter(){
    return <div className={styles["container"]}>
        <div className={styles["rooms-area"]}>

        </div>
        <div className={styles["buttons-area"]}>
            <Link to="game" style={{width:"calc(50% - 8px)"}} >
                <PrimaryButon style={{width:"100%"}} text="Iniciar Jogo"/>
            </Link>
            <PrimaryButon style={{width:"calc(50% - 8px)"}} text="Criar Sala"/>
        </div>
    </div>
}
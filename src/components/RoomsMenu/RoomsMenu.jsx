import React from 'react'
import styles from './room-menu.module.css'
import PrimaryButon from '../shared/PrimaryButton/PrimaryButton'

export default function RoomsMenu(){
    return <div className={styles["container"]}>
        <div className={styles["rooms-area"]}>

        </div>
        <div className={styles["buttons-area"]}> 
            <PrimaryButon style={{width:"calc(50% - 8px)"}} text="Iniciar Jogo"/>
            <PrimaryButon style={{width:"calc(50% - 8px)"}} text="Criar Sala"/>
        </div>
    </div>
}
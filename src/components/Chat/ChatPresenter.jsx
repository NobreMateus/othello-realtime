import React from 'react'
import PrimaryButton from '../shared/PrimaryButton/PrimaryButton'
import PrimaryTextInput from '../shared/PrimaryTextInput/PrimaryTextInput'
import styles from './chat-styles.module.css'

export default function ChatPresenter() {
    return <div className={styles["container"]}>
        <div className={styles["messages-container"]}>
            
        </div>
        <div className={styles["text-container"]}>
            <PrimaryTextInput style={{height: "100%" }}/>
            <PrimaryButton style={{width: "20%", height: "100%", fontSize: "17px"}} text="Enviar"/> 
        </div>
    </div> 
        
}
import React, { useRef } from 'react'
import PrimaryButton from '../shared/PrimaryButton/PrimaryButton'
import PrimaryTextInput from '../shared/PrimaryTextInput/PrimaryTextInput'
import styles from './chat-styles.module.css'

export default function ChatPresenter(props) {

    const chatMessagesAreaRef = useRef(null)
    const chatTypeMessageAreaRef = useRef(null)

    if(chatMessagesAreaRef.current !== null){
        const scrollHeight = chatMessagesAreaRef.current.scrollHeight 
        chatMessagesAreaRef.current.scrollBy(0, scrollHeight + 1000)
    }
        
    return <div className={styles["container"]}>
        <div className={styles["messages-container"]} ref={chatMessagesAreaRef} id="messages-container">
            {props.messages.map(message => {
                return <div className={styles["message-box"]}>
                    {message.text}
                </div> 
            })}
        </div>
        <div className={styles["text-container"]}>
            <PrimaryTextInput style={{height: "100%" }} ref={chatTypeMessageAreaRef} />
            <PrimaryButton style={{width: "20%", height: "100%", fontSize: "17px"}} text="Enviar"
                onClick={()=>{ props.addMessage({text:"Bom dia", sender: "Mateus"})}}
            /> 
        </div>
    </div>   
}
import React, { useRef, useState } from 'react'
import PrimaryButton from '../shared/PrimaryButton/PrimaryButton'
import PrimaryTextInput from '../shared/PrimaryTextInput/PrimaryTextInput'
import styles from './chat-styles.module.css'

export default function ChatPresenter(props) {

    const chatMessagesAreaRef = useRef(null)
    const [message, setMessage] = useState("")
        
    return <div className={styles["container"]}>
        <div className={styles["messages-container"]} ref={chatMessagesAreaRef} id="messages-container">
            {props.messages.map((obj, num) => {
                return <div key={"msg"+num} className={styles["message-box"]}>
                    {obj.message}
                </div> 
            })}
        </div>
        <div className={styles["text-container"]}>
            <PrimaryTextInput style={{height: "100%" }} onChange={setMessage} value={message}/>
            <PrimaryButton 
                style={{width: "20%", height: "100%", fontSize: "17px"}} 
                text="Enviar"
                onClick={()=>{ 
                    props.addMessage({message:message, user: "Usuario"})
                    setMessage("")
                }}
            /> 
        </div>
    </div>   
}
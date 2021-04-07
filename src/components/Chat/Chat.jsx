import React, { useState } from 'react'
import ChatPresenter from './ChatPresenter'

export default function Chat() {

    const [messages, setMessages] = useState([
        {text: "Bom dia", sender: "Mateus"},
    ])

    const addMessage = (message) => {
        let tempMessages = messages.concat(message)
        setMessages(tempMessages, ()=>{
            
        })
    }

    return <ChatPresenter messages={messages} addMessage={addMessage}/>
}

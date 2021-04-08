import React, { useEffect, useState } from 'react'
import ChatPresenter from './ChatPresenter'
import SocketManager from "../../model/SocketManager"

const socketManager = new SocketManager()

export default function Chat() {

    const [messages, setMessages] = useState([])

    useEffect(()=>{
        socketManager.messages = messages
    }, [messages])

    useEffect(()=>{
        socketManager.configChat(setMessages)
    }, [])

    const addMessage = (message) => {
        socketManager.sendMessage(message)
    }

    return <ChatPresenter messages={messages} addMessage={addMessage}/>
}

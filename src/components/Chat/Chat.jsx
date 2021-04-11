import React, { useEffect, useState, useContext } from 'react'
import ChatPresenter from './ChatPresenter'
import { ConnectionContext } from '../../providers/ConnectionProvider'

export default function Chat(props) {

    const [messages, setMessages] = useState([])
    const { connectionManager } = useContext(ConnectionContext) 

    useEffect(()=>{
        connectionManager.messages = messages
    }, [messages, connectionManager])

    useEffect(()=>{
        connectionManager.configChat(setMessages)
    }, [connectionManager])

    const addMessage = (message) => {
        connectionManager.sendMessage(message)
    }

    return <ChatPresenter messages={messages} addMessage={addMessage}/>
}

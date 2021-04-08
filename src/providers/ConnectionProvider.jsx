import React, {createContext} from 'react'
import SocketManager from "../model/SocketManager"

export const ConnectionContext =  createContext({})

export default function ConnectionProvider(props) {
    
    const data = {
        connectionManager: SocketManager.shared
    }

    return <ConnectionContext.Provider value={data} >
        {props.children}
    </ConnectionContext.Provider>
}
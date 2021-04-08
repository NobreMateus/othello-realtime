import React, {useContext} from 'react'
import { ConnectionContext } from '../../providers/ConnectionProvider'
import RoomsMenuPresenter from './RoomsMenuPresenter'

function RoomsMenu() {
    
    const { connectionManager } = useContext(ConnectionContext) 
    
    const enterRoom = (roomName) => {
        connectionManager.configRoom(roomName)
    }

    return <RoomsMenuPresenter enterRoom={enterRoom}/>

}

export default RoomsMenu
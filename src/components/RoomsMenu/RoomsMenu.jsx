import React, { useContext, useState, useEffect} from 'react'
import { ConnectionContext } from '../../providers/ConnectionProvider'
import RoomsMenuPresenter from './RoomsMenuPresenter'

function RoomsMenu() {
    
    const { connectionManager } = useContext(ConnectionContext)
    const [rooms, setRooms] = useState([])
    const [selectedRoom, setSelectedRoom] = useState(undefined)

    useEffect(()=>{
        connectionManager.setRooms = setRooms
        setRooms(connectionManager.rooms)
    }, [setRooms, connectionManager])

    useEffect(()=>{
        for(const room of rooms) {
            if (room.selected) setSelectedRoom(room) 
        }
    }, [rooms])

    const selectRoom = (roomId) => {
        const newRoomsState = rooms.map(room => {
            return {
                ...room,
                selected: roomId === room.id ? true : false
            }
        })
        setRooms(newRoomsState)
    }

    const enterRoom = () => {
        connectionManager.configRoom(selectedRoom.name)
    }

    return <RoomsMenuPresenter enterRoom={enterRoom} rooms={rooms} selectRoom={selectRoom}/>

}

export default RoomsMenu
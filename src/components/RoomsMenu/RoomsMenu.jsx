import React, { useContext, useState, useEffect} from 'react'
import { ConnectionContext } from '../../providers/ConnectionProvider'
import RoomsMenuPresenter from './RoomsMenuPresenter'

function RoomsMenu() {
    
    const { connectionManager } = useContext(ConnectionContext)
    const [rooms, setRooms] = useState([
        {id: 1, name: "first room", amountPlayers: 1, selected: false },
        {id: 2, name: "second room", amountPlayers: 1, selected: false },
        {id: 3, name: "third room", amountPlayers: 1, selected: false },
        {id: 4, name: "fourth room", amountPlayers: 1, selected: false },
        {id: 5, name: "fifth room", amountPlayers: 1, selected: false },
        {id: 6, name: "sixth room", amountPlayers: 1, selected: false },
    ])
    const [selectedRoom, setSelectedRoom] = useState(undefined)

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
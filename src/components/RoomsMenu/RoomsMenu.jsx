import React, { useContext, useState, useEffect} from 'react'
import { ConnectionContext } from '../../providers/ConnectionProvider'
import { UserConContext } from '../../providers/UserConProvider'
import RoomsMenuPresenter from './RoomsMenuPresenter'
import { useHistory } from "react-router-dom";

function RoomsMenu() {

    const history = useHistory();
    const { connectionManager } = useContext(ConnectionContext)
    const { userName } = useContext(UserConContext)
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
        if(selectedRoom){
            connectionManager.configRoom(selectedRoom.name, userName, history)
            history.push('/game')
        } else {
            alert("Selecione uma Sala")
        }
    }

    return <RoomsMenuPresenter enterRoom={enterRoom} rooms={rooms} selectRoom={selectRoom}/>

}

export default RoomsMenu
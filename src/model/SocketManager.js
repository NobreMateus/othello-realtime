import { io } from "socket.io-client";

export default class SocketManager {

    socket
    setBoardState
    setUserTurn
    roomName = "first room"
    messages = []

    constructor() {
        const socket = io("http://localhost:4000")
        this.socket = socket
        
        socket.on("connect", ()=>{
            console.log("Conectei")
        })
    }

    configRoom(roomName) {
        this.roomName = roomName
        this.socket.emit("enterRoom", {
            roomName: this.roomName
        })
    }

    configChat(setMessages) {
        this.socket.on("newMessage", (data)=>{
            const newMessages = this.messages.concat(data)
            this.messages = newMessages
            setMessages(newMessages)
        })
    }

    configGame(setBoardState, setUserTurn) {
        this.setBoardState = setBoardState
        this.setUserTurn = setUserTurn

        this.socket.on("startGame", (data)=>{
            console.log("Jogo Iniciado")
            this.setBoardState(data.gameState)
            this.setUserTurn(data.userTurn)
        })

        this.socket.on("updateBoardState", (data) => {
            this.setBoardState(data.gameState)
            this.setUserTurn(data.userTurn)
        })
    }

    updateGame(boardState, userTurn, pos) {
        if(boardState[pos] === "-") {
            this.socket.emit("updateGame", {
                pos: pos,
                userTurn: userTurn,
                roomName: this.roomName
            })
            userTurn==='x'?this.setUserTurn('o'):this.setUserTurn('x')
        }
    }

    sendMessage(data) {
        this.socket.emit("newMessage", {
            ...data,
            roomName: this.roomName
        })
    }
}
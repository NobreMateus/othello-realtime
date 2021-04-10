import { io } from "socket.io-client";

export default class SocketManager {

    socket
    setBoardState
    setUserTurn
    setRooms
    roomName = "first room"
    messages = []
    rooms = []

    static shared = this.shared ? this.shared : new SocketManager() 
    
    constructor() {
        const socket = io("http://localhost:4000")
        this.socket = socket
        
        socket.on("connect", ()=>{
            console.log("Conectei")
        })

        socket.on("getRooms", (data)=>{
            console.log(data)
            this.rooms = data
            if(this.setRooms) this.setRooms(this.rooms)
        })

        socket.on("fullRoom", (roomName) => {
            alert(`A sala ${roomName} está cheia, por favor tente outra sala!`)
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

    updateGame(boardState, userTurn, x, y) {
        console.log(this.roomName)
        if(boardState[x][y] === "-") {
            this.socket.emit("updateGame", {
                x: x,
                y: y,
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
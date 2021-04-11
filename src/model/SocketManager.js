import { io } from "socket.io-client";

export default class SocketManager {

    socket
    setBoardState
    setUserTurn
    setRooms
    history
    roomName = "first room"
    messages = []
    rooms = []

    setUser1Name
    setUser2Name
    serUser1Points
    setUser2Points
    setRoomName
    setUserTurnInd

    static shared = this.shared ? this.shared : new SocketManager() 
    
    constructor() {
        const socket = io("191.237.202.164:4000")
        this.socket = socket
        
        socket.on("connect", ()=>{
            console.log("Conectei")
        })

        socket.on("getRooms", (data)=>{
            console.log(data)
            this.rooms = data
            if(this.setRooms) this.setRooms(this.rooms)
        })

        socket.on("cantEnterRoom", (data) => {


            alert(`Não foi possível entrar em ${data.roomName}: ` + data.message)
        })
    }

    configRoom(roomName, userName, history) {
        this.roomName = roomName
        this.history = history

        this.socket.on("winnerGame", (data)=> {
            console.log(data)
        })

        this.socket.on("endGame", (data)=> {
            console.log(data)
            // alert(`O jogo terminou: ${data.message}`)
            history.push('/rooms')
        })

        this.socket.emit("enterRoom", {
            roomName: this.roomName,
            userName: userName
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

    configGameDetails(setUser1Name, setUser2Name, setUser1Points, setUser2Points, setRoomName, setUserTurnInd) {
        this.setUser1Name = setUser1Name
        this.setUser2Name = setUser2Name
        this.setUser1Points = setUser1Points
        this.setUser2Points = setUser2Points
        this.setRoomName = setRoomName

        this.socket.on("getInfo", (data) => {
            console.log(data)
            if(data.user1Name !== "") setUser1Name(data.user1Name)
            if(data.user2Name !== "") setUser2Name(data.user2Name)
            setRoomName(data.roomName)
        })

        this.socket.on("setPontuation", (data)=>{
            console.log(data)
            setUserTurnInd(data.userTurn)
            setUser1Points(data.user1Points)
            setUser2Points(data.user2Points)
        })
    }

    updateGame(boardState, userTurn, x, y) {
        if(boardState[x][y] === "p") {
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

    giveUpGame() {
        this.socket.emit('giveUp')
    }
}
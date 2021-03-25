import React from 'react'
import PrimaryButton from '../shared/PrimaryButton/PrimaryButton'
import PrimaryTextInput from '../shared/PrimaryTextInput/PrimaryTextInput'

function HomeContent() {
    return <form style={containerStyle}>
            <img src={`https://store-images.s-microsoft.com/image/apps.46459.9007199266242754.c00a4c16-2f94-4c57-b8aa-54548b3fc493.4cae3b15-9da0-4f2b-ae4a-7ffc5a80f3f2?w=672&h=378&q=80&mode=letterbox&background=%23FFE4E4E4&format=jpg`} alt="Jogo Othello" style={imageStyle}/>
            <PrimaryTextInput />
            <PrimaryButton text="Iniciar Jogo" style={{width:"90%"}} />
        </form>
}

export default HomeContent

const containerStyle = {
    display: "flex",
    flexDirection: "column",
    width: "60%",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
}

const imageStyle = {
    backgroundColor: "grey",
    width: "40%",
    minWidth: "400px",
    height: "auto",
    objectFit: "cover"
}
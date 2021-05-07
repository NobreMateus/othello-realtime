import React from 'react'
import { Link } from 'react-router-dom'
import PrimaryButton from '../shared/PrimaryButton/PrimaryButton'
import PrimaryTextInput from '../shared/PrimaryTextInput/PrimaryTextInput'

function HomeContentPresenter(props) {
    console.log(props)
    return <form style={containerStyle}>
            {/* <img src={`https://store-images.s-microsoft.com/image/apps.46459.9007199266242754.c00a4c16-2f94-4c57-b8aa-54548b3fc493.4cae3b15-9da0-4f2b-ae4a-7ffc5a80f3f2?w=672&h=378&q=80&mode=letterbox&background=%23FFE4E4E4&format=jpg`} alt="Jogo Othello" style={imageStyle}/> */}
            <PrimaryTextInput placeholder={"Digite seu Nickname..."} onChange={props.setUsername} style={{marginBottom: '12px', fontSize: "17px", paddingTop:'14px'}} />
            <Link style={{width:"90%", marginTop: '12px'}} to="/rooms" >
                <PrimaryButton text="Iniciar Jogo" style={{width:"100%"}} />
            </Link>
        </form>
}

export default HomeContentPresenter

const containerStyle = {
    display: "flex",
    flexDirection: "column",
    width: "60%",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
}

// const imageStyle = {
//     backgroundColor: "grey",
//     width: "40%",
//     minWidth: "400px",
//     height: "auto",
//     objectFit: "cover"
// }
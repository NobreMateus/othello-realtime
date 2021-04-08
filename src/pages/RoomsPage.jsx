import React from 'react'
import RoomsMenu from '../components/RoomsMenu/RoomsMenu'

function RoomsPage() {
    return <div style={pageStyle}>
            <RoomsMenu></RoomsMenu>
    </div>
}
export default RoomsPage

const pageStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%",
}
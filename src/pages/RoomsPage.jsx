import React from 'react'
import RoomsMenu from '../components/RoomsMenu/RoomsMenu'
import ConnectionProvider from '../providers/ConnectionProvider'

function RoomsPage() {
    return <div style={pageStyle}>
        <ConnectionProvider>
            <RoomsMenu></RoomsMenu>
        </ConnectionProvider>
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
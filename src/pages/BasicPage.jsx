import React from 'react'

function BasicPage(props) {
    return <div style={style}>
        {props.children}
    </div>
}

const style = {
    background: "linear-gradient(90deg, rgba(132,94,194,1) 0%, rgba(255,199,95,1) 100%)",
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
}

export default BasicPage
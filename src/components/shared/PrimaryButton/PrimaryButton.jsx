import React from 'react'

function PrimaryButton(props) {
    return <>
        <button onClick={props.onClick} style={{...style, ...props.style}} type={props.type}>{props.text}</button>
    </>
}
export default PrimaryButton

const style = {
    height: "44px",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    paddingLeft: "8px",
    paddingRight: "8px",
    backgroundColor: "#FF5E78",
    color: "#F4F4F4",
    cursor: "pointer"
}
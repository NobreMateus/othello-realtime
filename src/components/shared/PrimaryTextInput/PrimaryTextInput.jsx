import React from 'react'

function PrimaryTextInput(props) {
    return <>
        <input style={{...style, ...props.style}} type="text" name="" id="" maxLength={props.maxLength}/>
    </>
}
export default PrimaryTextInput

const style = {
    height: "36px",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    paddingLeft: "8px",
    paddingRight: "8px",
    width: "calc(100% - 16px)",
}
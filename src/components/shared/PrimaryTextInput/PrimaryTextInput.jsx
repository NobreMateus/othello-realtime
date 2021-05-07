import React from 'react'

function PrimaryTextInput(props) {
    return <>
        <textarea placeholder={props.placeholder} ref={props.ref} style={{...style, ...props.style}} name="" id="" maxLength={props.maxLength} onChange={(ev)=>props.onChange(ev.target.value)} value={props.value}/>
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
    resize: "none"
}
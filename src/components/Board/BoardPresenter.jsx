import React from 'react'
import styles from './board-style.module.css'

export default function BoardPresenter(props) {

    return <div className={styles["grid-container"]}>

        {props.statusMatrix.map((line, x)=>{
            return <>
                { line.map((status, y)=>{
                    
                    let showUserPart = false
                    let userPartColor = ""
                    if(status!=="-"){
                        showUserPart = true
                        status==="x"?userPartColor="#845EC2":userPartColor="#FFC75F"
                    }
                    
                    return <div key={`${x}${y}`} className={status==="-"?styles["grid-item"]:styles["inactive-item"]} onClick={()=>props.clickPosition(x, y)}>
                        {showUserPart?
                            <div className={styles["user-part"]} style={{backgroundColor:userPartColor}}></div>
                            :null
                        }
                </div>
                })}
            </>
        })}

        {/* {props.allStatus.map((status, num)=> {
            let showUserPart = false
            let userPartColor = ""
            if(status!=="-"){
                showUserPart = true
                status==="x"?userPartColor="#845EC2":userPartColor="#FFC75F"
            }
            return <div className={status==="-"?styles["grid-item"]:styles["inactive-item"]} onClick={()=>props.clickPosition(num)}>
                {showUserPart?
                    <div className={styles["user-part"]} style={{backgroundColor:userPartColor}}></div>
                    :null
                }
            </div>
        })} */}
    </div>
}
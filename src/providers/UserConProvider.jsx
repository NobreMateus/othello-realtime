import React, {createContext, useState} from 'react'

export const UserConContext =  createContext({})

export default function UserConProvider(props) {

    const [userName, setUserName]= useState("Nobre")
    
    const data = {
        setUserName: setUserName,
        userName: userName
    }


    return <UserConContext.Provider value={data} >
        {props.children}
    </UserConContext.Provider>
}
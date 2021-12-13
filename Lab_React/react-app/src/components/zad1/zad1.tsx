import { useState } from "react"
import React from "react"


const Zad1 = () => {
    const [fullName,setFullName] = useState(" ")

    const clickMethod = (name:string) => {
        setFullName(name)
    }
    return(
        <div>
            <p>{fullName}</p>
            <button onClick={()=> clickMethod("Kamil Gradzik")}>Kliknij mnie</button>
        </div>
    )
}

export default Zad1
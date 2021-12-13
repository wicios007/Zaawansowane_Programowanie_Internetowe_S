import setState, { useState } from 'react'

const Zad5 = () => {
    const [count,changeCount] = useState(0)
    return(
        <div>
            <p>{count}</p>
            <button onClick={()=>changeCount(count + 2)}>++</button>
            <button onClick={()=>changeCount(count + 1)}>+</button>
            <button onClick={()=>changeCount(count - 1)}>-</button>
            <button onClick={()=>changeCount(count - 2)}>--</button>
        </div>
    )
}

export default Zad5
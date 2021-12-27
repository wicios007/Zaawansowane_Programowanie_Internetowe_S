import React, { useContext } from "react"
import { Zad11_context } from "./Context"

export var Zad11vol1 = () =>
{
    return (
        <Zad11_context.Consumer>
            {({ setVisibility }) => (
                <button onClick={() => setVisibility(false)}>Wyświetl div</button>
            )}
        </Zad11_context.Consumer>
    );
}
export default Zad11vol1
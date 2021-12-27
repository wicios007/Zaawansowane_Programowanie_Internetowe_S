import React, { useContext } from "react"
import { Zad11_context } from "./Context"

export var Zad11vol2 = () => {

    var { visibility, informacja } = useContext(Zad11_context)

    return (
        <Zad11_context.Consumer>
            {({setInfo}) => (
                <div>
                    <div hidden={visibility}>
                        <p>Czy chcesz dalej uczyć się frameworka React?</p>
                        <button onClick={() => setInfo("Cieszę się! Idźmy dalej")}>Tak</button>&nbsp;
                        <button onClick={() => setInfo("Przykro mi, że się męczysz!")}>Nie</button>
                    </div>
                    <p>{informacja}</p>
                </div>
            )}
        </Zad11_context.Consumer>
    );
}
export default Zad11vol2
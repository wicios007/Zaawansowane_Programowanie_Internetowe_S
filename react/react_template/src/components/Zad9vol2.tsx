import { useContext } from "react";
import { number_of_visible_button } from "./Context"

export var Zad9vol2 = () =>
{
    const { number } = useContext(number_of_visible_button)
    var hidden_comp = true
    if (number == 1)
        hidden_comp = true
    if (number == 2)
        hidden_comp = false
    return (
        <number_of_visible_button.Consumer>
            {({ setNumber }) => (
                <button onClick={() => setNumber(1)} hidden={hidden_comp}>Schowaj drugi komponent</button>
            )}
        </number_of_visible_button.Consumer>
    );
}
export default Zad9vol2;
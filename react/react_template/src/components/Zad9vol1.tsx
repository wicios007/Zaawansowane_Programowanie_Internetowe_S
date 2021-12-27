import { useContext } from "react";
import { number_of_visible_button } from "./Context"

export var Zad9vol1 = () =>
{
    /*const { number } = useContext(number_of_visible_button);
    var hidden_comp = false
    if (number == 1)
        hidden_comp = false
    if (number == 2)
        hidden_comp = true*/
    return (
        <number_of_visible_button.Consumer>
            {({ setNumber }) => (
                <button onClick={() => setNumber(2)}>Wyświetl drugi komponent</button>
            )}
        </number_of_visible_button.Consumer>
    );
}
export default Zad9vol1;
import React from "react";

type State =
{
    counter : number,
    images : Array<string>,
    blad : string,
    button1_disabled : boolean,
    button2_disabled : boolean
}

export class Zad4 extends React.Component<{}, State>
{
    constructor(props: {}) {
        super(props);
        this.state =
        {
            counter : 0,
            button1_disabled : false,
            button2_disabled: false,
            images : 
            [
                "zdjecia/zdjecie1.png",
                "zdjecia/zdjecie2.jpg",
                "zdjecia/zdjecie3.jpg"
            ],
            blad : ""
        }
    }

    method1 = (e: any) => {
        let newstate = { ...this.state }
        if (newstate.counter > 0)
        {
            newstate.counter = newstate.counter - 1
            newstate.blad = ""
            newstate.button2_disabled = false
        }
        else
        {
            newstate.blad = "To jest pierwsze zdjęcie, nie można wybrać poprzedniego zdjęcia."
            newstate.button1_disabled = true
        }
        this.setState(newstate);
    }

    method2 = (e: any) => {
        let newstate = { ...this.state }
        if (newstate.counter < newstate.images.length-1)
        {
            newstate.counter = newstate.counter + 1
            newstate.blad = ""
            newstate.button1_disabled = false
        }
        else
        {
            newstate.blad = "To jest ostatnie zdjęcie, nie można wybrać następnego."
            newstate.button2_disabled = true
        }
        this.setState(newstate);
    }

    render() {
        return (
            <>
                <div><table><tr>
                    <td><button onClick={this.method1} disabled={this.state.button1_disabled}>Poprzednie</button></td>
                    <td><img src={this.state.images[this.state.counter]}/></td>
                    <td><button onClick={this.method2} disabled={this.state.button2_disabled}>Następne</button></td>
                    </tr><tr><td></td><td>{this.state.blad}</td><td></td></tr>
                    </table></div>
            </>
        );
    }
}

//Z hidden wystarczy zrobić tak samo jak z disabled IZI
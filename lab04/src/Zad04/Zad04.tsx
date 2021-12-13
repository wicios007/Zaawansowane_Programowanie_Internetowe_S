import React from "react";
import { Button } from "react-bootstrap"
import "./Zad04.css"

type State = {
    counter: number
}

export class Zad04 extends React.Component<{}, State>{

    constructor(props:{}){
        super(props);
        this.state = {
            counter: 0,
        }
    }

    render(){
        return(<>
        <p>{this.state.counter}</p>
        <Button onClick={() => this.sub(1)}>-1</Button>
        <Button onClick={() => this.add(1)}>+1</Button>
        <Button onClick={() => this.sub(2)}>-2</Button>
        <Button onClick={() => this.add(2)}>+2</Button>

        </>)
    }

    add = (value: number) => {
        const newState = {
            counter: this.state.counter + value
        }
        this.setState(newState)
    }
    sub = (value: number) => {
        const newState = {
            counter: this.state.counter - value
        }
        this.setState(newState)
    }

}
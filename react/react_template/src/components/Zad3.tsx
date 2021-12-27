import React from "react";

type State =
    {
        paragraf : number
    }

export class Zad3 extends React.Component<{}, State>
{
    constructor(props: {}) {
        super(props);
        this.state =
        {
            paragraf : 0
        }
    }

    method1 = (e: any) => {
        let newstate = { ...this.state }
        newstate.paragraf = newstate.paragraf + 1
        this.setState(newstate);
    }

    method2 = (e: any) => {
        let newstate = { ...this.state }
        newstate.paragraf = newstate.paragraf - 1
        this.setState(newstate);
    }

    method3 = (e: any) => {
        let newstate = { ...this.state }
        newstate.paragraf = newstate.paragraf + 2
        this.setState(newstate);
    }

    method4 = (e: any) => {
        let newstate = { ...this.state }
        newstate.paragraf = newstate.paragraf - 2
        this.setState(newstate);
    }

    render() {
        return (
            <>
                <p>{this.state.paragraf}</p>
                <button onClick={this.method1}>+1</button><button onClick={this.method2}>-1</button>
                <button onClick={this.method3}>+2</button><button onClick={this.method4}>-2</button>
            </>
        );
    }
}
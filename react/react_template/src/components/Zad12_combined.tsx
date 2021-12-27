import React from "react";
import { Zad12_context } from "./Context";
import { Zad12vol1 } from "./Zad12vol1"
import { Zad12vol2 } from "./Zad12vol2"

export class Zad12_combined extends React.Component
{

    viewDescription = (id: number) =>
    {
        this.setState({hidden_desc: false})
    }

    state =
    {
        hyperlinks:
        [
            { id: 1, name: "youtube", src: "#", color: "background-color: red" },
            { id: 2, name: "fb", src: "#", color: "background-color: green" },
            { id: 3, name: "9gag", src: "#", color: "background-color: blue" }
        ],
        hidden_desc: true,
        viewDescription: this.viewDescription
    }

    render() 
    {
        return (
            <Zad12_context.Provider value={this.state}>
                <Zad12vol1/>
                <Zad12vol2/>
            </Zad12_context.Provider>
        );
    }
    
}
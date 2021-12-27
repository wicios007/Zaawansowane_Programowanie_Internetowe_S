import React, { Component, useContext } from "react"
import { Zad11vol1 } from "./Zad11vol1"
import { Zad11vol2 } from "./Zad11vol2"
import { Zad11_context } from "./Context"

export class Zad11_combined extends React.Component
{
    setVisibility = (visibility : boolean) =>
    {
        this.setState({visibility})
        this.setState({informacja: ""})
    }
    
    setInfo = (informacja: string) => 
    {
        this.setState({visibility: true})
        this.setState({informacja})
    }

    state = {
        visibility: true,
        setVisibility: this.setVisibility,
        informacja: "",
        setInfo: this.setInfo
    }

    render() {
        return (
            <Zad11_context.Provider value={this.state}>
                <Zad11vol1/>
                <Zad11vol2/>
            </Zad11_context.Provider>
        );
    }

}
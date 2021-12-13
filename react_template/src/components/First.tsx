import React from "react";

type State = 
{
    name:string;
}

export class First extends React.Component<{}, State>
{

    constructor(props:{})
    {
        super(props);
        this.state =
        {
            name : "Ala"
        }
    }

    method = () =>
    {
        this.setState(state => ({...state, name : "Kamil"}));
    }
    
    render() {
        return (
            <div>
            <p>{this.state.name}</p>
            <button onClick={this.method}>Przycisk</button>
            </div>
        );
    }
}
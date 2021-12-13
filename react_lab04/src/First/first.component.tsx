import React from "react";

type State = {
    firstName: string;
    lastName: string;
}

export class First extends React.Component<{}, State>{
    
    constructor(props:{}) {
        super(props);
        this.state = {
            firstName: " ",
            lastName: " "
        };
    }
    
    method = () => {
        const newState = {firstName: "Daniel", lastName: "Więcek"};
        this.setState(newState);
    }

    render() {
        return(
            <div>
                <p>{this.state.firstName + ' ' + this.state.lastName}</p>
                <button onClick={this.method}>Kliknij mnie!</button>
            </div>
        )
    }
}

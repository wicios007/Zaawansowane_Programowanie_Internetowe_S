import React from "react";

export class First extends React.Component{
    firstName: string = " "
    secondName: string = " "
    
    method = () => {
    this.firstName = "Daniel";
    this.secondName = "Więcek";
    console.log(this.firstName + this.secondName);
    }

    render() {
        return(
            <div>
                <p>{this.firstName + this.secondName}</p>
                <button onClick={this.method}>Kliknij mnie!</button>
            </div>
        )
    }
}

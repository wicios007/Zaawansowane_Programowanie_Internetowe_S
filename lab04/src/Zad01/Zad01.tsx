import React from "react";
import { Button } from "react-bootstrap"
import "./Zad01.css"

export class Zad01 extends React.Component{

    state = {
        isNameShown: false
    }

    name: String = "Łukasz Czech";

    render(){
        return(<>
            {this.state.isNameShown ?
                <p>{this.name}</p>
                : null
            }
            <Button variant="primary" onClick={this.showName}>Pokaż dane</Button></>)
    }

    showName = () => {
        this.setState({isNameShown: !this.state.isNameShown})
    }
}
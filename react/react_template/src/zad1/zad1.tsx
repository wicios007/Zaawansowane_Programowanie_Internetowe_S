import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

type State = {
    firstName : string;
    lastName : string;
    isShowed : boolean
}

export class Zad1 extends React.Component<{}, State>{

    constructor(props:{}) {
        super(props);
        this.state = {
            firstName : "",
            lastName : "",
            isShowed : false

        }
        
    }

    showPersonalia = () => {
        const newState = {
            firstName: "Denys", 
            lastName: "Korniichuck", 
            isShowed : this.state.isShowed?false:true}

        this.setState(newState)
    }

    render(){
        return(
        <>
        <Card style={{width: '18rem'}}>
            <Card.Header>
                Personalia
            </Card.Header>
            <Card.Body>
                <Button variant="primary" onClick={this.showPersonalia}>Pokaż</Button>{' '}
                <div>
                    {this.state.isShowed && 
                        <div>
                            {this.state.firstName} {this.state.lastName}
                        </div>}
                </div>
            </Card.Body>
        </Card>
        
        </>
        )
    }
}
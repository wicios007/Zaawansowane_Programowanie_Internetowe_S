import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap'


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
            firstName: "Wiktor", 
            lastName: "Kibało", 
            isShowed : this.state.isShowed?false:true
        }

        this.setState(newState)
    }
//style={{width: '18rem'}}
    render(){
        return(
        <>
        <Row>
        <Col></Col>
        <Col>
        <Card>
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
        </Col>
        <Col></Col>
        </Row>
        </>
        )
    }
}
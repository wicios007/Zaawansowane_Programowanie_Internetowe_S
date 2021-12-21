import React from "react";
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

type State = {
    counter : number
}

export class Zad4 extends React.Component<{}, State> {

    score : number = 0

    constructor(props:{}) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    render() {
        return (
            <>
            <Row>
                <Col></Col>
                <Col>
                <Card>
                    <Card.Header>
                        <p>Zad4</p>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col></Col>
                            <Col>{this.state.counter}</Col>
                            <Col></Col>
                        </Row>
                    </Card.Body>
                    <Card.Footer>
                    <Row>
                            <Col>
                                <Button variant="primary" onClick={() => this.minus(1)}>-1</Button>
                            </Col>
                            <Col>
                                <Button variant="primary" onClick={() => this.plus(1)}>+1</Button>
                            </Col>
                        </Row>
                        <Row>
                        <Col>
                                <Button variant="primary" onClick={() => this.minus(2)}>-2</Button>
                            </Col>
                            <Col>
                                <Button variant="primary" onClick={() => this.plus(2)}>+2</Button>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
                </Col>
                <Col></Col>
            </Row>
            </>
        )
    }

    plus = (value : number) => {
        const newState = {
            counter : this.state.counter + value
        }
        this.setState(newState)

    }
    minus = (value : number) => {
        const newState = {
            counter : this.state.counter - value
        }
        this.setState(newState)
    }


}


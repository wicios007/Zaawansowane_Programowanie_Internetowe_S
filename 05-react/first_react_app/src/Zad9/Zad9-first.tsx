import React from "react";
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import {Zad9Second} from './Zad9-second';

type State = {
    isSecondActive : boolean
}

export class Zad9First extends React.Component<{}, State> {

    constructor(props: {}) {
        super(props);
        this.state = {
            isSecondActive : false
        }
    }

    activateSecond = () => {
        const newState = {
            isSecondActive : !this.state.isSecondActive
        }
        this.setState(newState)

    }


    render() {
        return (
            <>
                <Row>
                    <Col>
                    <Card>
                            <Card.Title>
                                First Component
                            </Card.Title>
                            <Card.Body>
                                i love react
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="primary" onClick={this.activateSecond}>
                                    Show second
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                    {
                    this.state.isSecondActive &&
                        <Zad9Second active={this.activateSecond}></Zad9Second>
                    }
                    </Col>
                </Row>

            </>
        )
    }

}


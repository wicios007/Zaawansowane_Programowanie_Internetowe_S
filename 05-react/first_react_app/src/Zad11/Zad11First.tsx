import React from "react";
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { Zad11Second } from "./Zad11Second";

type State = {
    isSecondActive : boolean,
    text : string
}

export class Zad11First extends React.Component<{}, State> {

    constructor(props: {}) {
        super(props);
        this.state = {
            isSecondActive : false,
            text : ""
        }
    }

    activateSecond = () => {
        const newState = {
            ...this.state,
            isSecondActive : !this.state.isSecondActive
        }
        this.setState(newState)

    }

    showText = (textChange : string) => {
        const newState = {
            isSecondActive : !this.state.isSecondActive,
            text : textChange
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
                                Zad 11
                            </Card.Title>
                            <Card.Body>
                                {this.state.text}
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="primary" onClick={this.activateSecond}>
                                    Show second
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                    {   this.state.isSecondActive &&
                        <Zad11Second active = {this.activateSecond} text = {this.showText}></Zad11Second>
                    }
                    </Col>
                </Row>

            </>
        )
    }

}


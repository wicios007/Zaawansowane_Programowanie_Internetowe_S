import React from "react";
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

type State = {
    isSecondActive : boolean,
}
type Properties = {
    active: () => void,
    text : (changeText : string) => void
}

export class Zad11Second extends React.Component<Properties, State> {

    constructor(props: Properties) {
        super(props);
        this.state = {
            isSecondActive : false,
        }
    }

    activateSecond = () => {
        const newState = {
            isSecondActive : !this.state.isSecondActive
        }
        this.setState(newState)

    }
    yesChoose = () => {
        this.props.active()
        this.props.text("Super! Idźmy dalej")
    }

    noChoose = () => {
        this.props.active()
        this.props.text("Szkoda :(")
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
                                Czy chcesz dalej uczyć się frameworka React?
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="primary" onClick={this.yesChoose}>
                                    Tak
                                </Button>
                                <Button variant="primary" onClick={this.noChoose}>
                                    Nie
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>

            </>
        )
    }

}


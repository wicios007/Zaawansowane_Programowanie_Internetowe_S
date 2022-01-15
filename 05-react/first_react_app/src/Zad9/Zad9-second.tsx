import React from "react";
import Card from 'react-bootstrap/Card';
import { Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

type State = {
    isSecondActive : boolean
}
type Properties = {
    active: () => void
}

export class Zad9Second extends React.Component<Properties, State> {

    constructor(props: Properties) {
        super(props);

        this.state = {
            isSecondActive : true
        }
    }

    deactivateMe = () => {

    }


    render() {
        return (
            <>
                <Row>
                    <Card>
                            <Card.Title>
                                Second Component
                            </Card.Title>
                            <Card.Body>
                                try to hide me
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="primary" onClick={this.props.active}>
                                    Hide me
                                </Button>
                            </Card.Footer>
                        </Card>
                </Row>

            </>
        )
    }

}


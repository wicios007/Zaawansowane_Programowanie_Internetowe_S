import React from "react";
import Card from 'react-bootstrap/Card';
import {Row, Col, ListGroup} from 'react-bootstrap'

interface Link{
    id: number
    name : string
    url : string
    description : string
}

type State = {
    links : Link[]
}

export class Zad2 extends React.Component<{}, State>{
    constructor(props: {}) {
        super(props);
        this.state = {
            links : [
                {id: 1, name: "Google", url:"https://www.google.com/", description: "Wyszukiwarka"},
                {id: 2, name: "PCz", url:"https://www.pcz.pl/", description: "Politechinka Częstochowska"},
                {id: 3, name: "WIMiI", url:"http://wimii.pcz.pl/", description: "WIMiI"},
                {id: 4, name: "Wirtualna Polska", url:"https://www.wp.pl/", description: "Portal wp.pl"},
            ]
        }
        
    }
    render(){
        return(
        <>
            <Row>
            <Col></Col>
            <Col>
            <Card>
                <Card.Header>
                    <p>Linki</p>
                </Card.Header>
                <Card.Body>
                    <ListGroup>
                        {
                            this.state.links.map(c => {
                                return <ListGroup.Item key={c.id} action href={c.url}>{c.name}</ListGroup.Item>
                            })
                        }
                    </ListGroup>
                </Card.Body>
            </Card>
            </Col>
            
            <Col></Col>
            </Row>
        </>
        )
    }
}
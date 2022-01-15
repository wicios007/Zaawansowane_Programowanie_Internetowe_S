import React from "react";
import Card from 'react-bootstrap/Card';
import {Row, Col, ListGroup, Button} from 'react-bootstrap'
import { ILink } from "./ILink"



type Properties = {
    link : ILink,
    delete : (index : number) => void
    hide : () => void

}


export class DeleteZad2 extends React.Component<Properties>{
    constructor(props: Properties) {
        super(props);
        }
        
    render(){
        return(
        <>
            <Card>
                <Card.Header>
                    Usuwanie
                </Card.Header>
                <Card.Body>
                    {
                        this.props.link != null ? <div>Czy na pewno chcesz usunąć link "{this.props.link.name}" </div> : null
                    }
                    
                </Card.Body>
                <Card.Footer>
                    <Row>
                        <Col><Button 
                        variant="outline-primary" 
                            onClick={() => {this.props.delete(this.props.link.id)
                            this.props.hide()}
                            }>Tak</Button></Col>
                        <Col><Button 
                        variant="outline-danger" 
                        onClick = {() => {
                            this.props.hide()
                        }}
                        >Nie</Button></Col>
                    </Row>
                </Card.Footer>
            </Card>
            
        </>
        )
    }
}
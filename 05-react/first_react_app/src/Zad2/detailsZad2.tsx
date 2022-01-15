import React from "react";
import Card from 'react-bootstrap/Card';
import {Row, Col, ListGroup} from 'react-bootstrap'
import { ILink } from "./ILink"



type Properties = {
    link : ILink
}


export class DetailsZad2 extends React.Component<Properties>{
    constructor(props: Properties) {
        super(props);
        }
        
    render(){
        return(
        <>
            <Card>
                <Card.Header>
                    
                    { this.props.link != null ? this.props.link.name : null}
                </Card.Header>
                <Card.Body>
                    {this.props.link != null ? this.props.link.description : null}
                </Card.Body>
            </Card>
            
        </>
        )
    }
}
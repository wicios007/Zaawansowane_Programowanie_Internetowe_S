import React from "react";
import Card from 'react-bootstrap/Card';

export class Zad2 extends React.Component{
    render(){
        return(
            <>
            <Card style={{width: "18rem"}}>
                <Card.Header>
                    <p>Linki</p>
                </Card.Header>
                <Card.Body>
                    <p>Tutaj beda linki</p>
                </Card.Body>
            </Card>
            </>
        )
    }
}
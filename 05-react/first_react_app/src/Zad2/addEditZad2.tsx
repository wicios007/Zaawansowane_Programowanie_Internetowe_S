import React from "react";
import { Card } from "react-bootstrap";
import { ILink } from "./ILink";


type State = {
    link : ILink,
    isEdit : boolean,
    isAdd : boolean
}
type Properties = {
    link : ILink
}

export class AddEditZad2 extends React.Component<Properties, State>{

    constructor(props : Properties) {
        super(props);
        this.state = {
            link : {id: 1, name : "", description : "", url : "", isActive : false},
            isEdit : false,
            isAdd : false
        }
    }

    render() {
        return(
            <>
            <Card>
                <Card.Header>

                </Card.Header>
                <Card.Body>
                    
                </Card.Body>
            </Card>
            </>
        )
    }
}
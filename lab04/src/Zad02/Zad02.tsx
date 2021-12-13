import React from "react";
import { ListGroup } from "react-bootstrap"
import "./Zad02.css"

export class Zad02 extends React.Component{

    links = [
        { name: "Google", url: "http://www.google.com", clicked: false },
        { name: "StackOverflow", url: "http://www.stackoverflow.com", clicked: false },
        { name: "Politechnika Częstochowska", url: "https://pcz.pl", clicked: false },
        { name: "PCz WIMiI", url: "https://wimii.pcz.pl", clicked: false },
        { name: "PCz e-learning", url: "https://moodle2021.pcz.pl/", clicked: false }
    ]

    render(){
        return(<>
            <ListGroup as="ul">
            {this.links.map(
                (l) => <ListGroup.Item as="li" action href={l.url}><a href={l.url}>{l.name}</a></ListGroup.Item>
            )}
            </ListGroup>
        </>)
    }

}
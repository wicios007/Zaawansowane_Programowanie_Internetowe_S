import React from "react";
import Card from 'react-bootstrap/Card';
import { Row, Col, ListGroup, Button, Container, ButtonGroup } from 'react-bootstrap'
import { DetailsZad2 } from "./detailsZad2";
import { ILink } from "./ILink"
import { DeleteZad2 } from "./deleteZad2";
import { linkSync } from "fs";


type State = {
    links: ILink[],
    showDetails: boolean,
    detailsId: number,
    showDelete: boolean,
    showEdit : boolean
}

export class Zad2 extends React.Component<{}, State>{
    constructor(props: {}) {
        super(props);
        this.state = {
            links: [
                { id: 1, name: "Google", url: "https://www.google.com/", description: "Wyszukiwarka", isActive: false },
                { id: 2, name: "PCz", url: "https://www.pcz.pl/", description: "Politechinka Częstochowska", isActive: false },
                { id: 3, name: "WIMiI", url: "http://wimii.pcz.pl/", description: "WIMiI", isActive: false },
                { id: 4, name: "Wirtualna Polska", url: "https://www.wp.pl/", description: "Portal wp.pl", isActive: false },
            ],
            showDetails: false,
            showDelete: false,
            showEdit : false,
            detailsId: 0
        }

    }

    showDetails = (index: number) => {
        //var links = this.state.links
        //links[index - 1].isActive = true
        const newState = {
            ...this.state,
            showDetails: true,
            detailsId: index,
            showDelete : false
        }
        this.setState(newState)
    }

    showDelete = (index: number) => {
        const newState = {
            ...this.state,
            showDetails: false,
            detailsId: index,
            showDelete: true
        }
        this.setState(newState)
    }

    hideDelete = () => {
        const newState = {
            ...this.state,
            showDelete: false
        }
        this.setState(newState)
    }


    deleteLink = (index: number) => {
        var links = this.state.links
        var link = this.state.links[index]

        // var linkToDelete = links.find(c => c.id == index)!
        // var linkToDelete = links.findIndex(c => c.id == index)
        // if(linkToDelete == null) return
        // const linkId = links.indexOf(linkToDelete)
         links.splice(index - 1, 1)
        // links.splice(index, 1)

        const newState = {
            ...this.state,
            links: links
        }
        this.setState(newState)
    }

    render() {
        return (
            <>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <p>Linki</p>
                            </Card.Header>
                            <Card.Body>
                                <ListGroup>
                                    {//action
                                        this.state.links.map(c => {
                                            return <ListGroup.Item key={c.id}>
                                                <Row>
                                                    <Col onClick={() => { this.showDetails(c.id) }}>
                                                        <a href={c.url}>{c.name}</a>
                                                    </Col>
                                                    <Col xs lg="4">
                                                        <ButtonGroup>
                                                            <Button variant="outline-danger" onClick={() => { this.showDelete(c.id) }}>Usuń</Button>
                                                            <Button variant="outline-primary" onClick = {() => {this.showDelete(c.id)}}>Edytuj</Button>
                                                        </ButtonGroup>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                        })
                                    }
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        {
                            this.state.showDetails ? <DetailsZad2 link={this.state.links[this.state.detailsId - 1]}></DetailsZad2> : null
                        }
                        {
                            this.state.showDelete ? <DeleteZad2 link={this.state.links[this.state.detailsId - 1]} 
                                                                delete={() => { this.deleteLink(this.state.links.find(c => c.id == this.state.detailsId)!.id) } } 
                                                                hide = {this.hideDelete}></DeleteZad2> : null
                        }
                        {
                            this.state.showEdit 
                        }
                        {/* 123 this.state.links[this.state.detailsId - 1].id */}
                    </Col>

                </Row>
            </>
        )
    }
}
import React from "react";
import { ListGroup } from "react-bootstrap"
import { LinkItem } from "./LinkItem";
import "./Zad02.css"
import { Zad02details } from "./Zad02details";

type State ={
    showDetails: boolean,
    detailsIndex: number
}
export class Zad02 extends React.Component<{}, State>{

    links = [
        { name: "Google", url: "http://www.google.com", description: "Strona pozwalająca na wyszukiwanie w internecie", hidden: false },
        { name: "StackOverflow", url: "http://www.stackoverflow.com", description: "Strona, na której można poszukać informacji na problemy programistyczne", hidden: false },
        { name: "Politechnika Częstochowska", url: "https://pcz.pl", description: "Główna strona Politechniki Częstochowskiej", hidden: false },
        { name: "PCz WIMiI", url: "https://wimii.pcz.pl", description: "Strona Wydziału Inżynierii Mechanicznej i Informatyki Politechniki Częstochowskiej", hidden: false },
        { name: "PCz e-learning", url: "https://moodle2021.pcz.pl/", description: "Strona e-learningowa Politechniki Częstochowskiej", hidden: false }
    ]

    constructor(props: {}){
        super(props);
        this.state = {
            showDetails: false,
            detailsIndex: 0
        }

    }
    
    render(){
        return(<>
            <ListGroup as="ul">
            {this.links.map(
                (l, index) => 
                
                !l.hidden &&
                <LinkItem link={l} index={index} showDetails={this.showDetails} hideLink={this.hideLink}></LinkItem>
                // <ListGroup.Item as="li" action href={l.url} onClick={() => {this.showDetails(index)}}><a href={l.url}>{l.name}</a><Button className="float-end" onClick={() => {this.hideLink(index)}}>Usuń</Button></ListGroup.Item>
                )}
            </ListGroup>
            { this.state.showDetails &&
                <Zad02details text={this.links[this.state.detailsIndex].description}></Zad02details>
            }
        </>)
    }

    showDetails = (index: number) => {
        this.setState(state => ({...state, showDetails: !state.showDetails, detailsIndex: index}))
    }
    hideLink = (index: number) =>{
        this.links[index].hidden = true;
        // this.state.detailsIndex == index ? this.state.showDetails = false : null
        this.setState(state => ({...state, showDetails: false }))
        console.log(this.state.showDetails)
    }
}
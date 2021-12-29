import { linkSync, stat } from "fs";
import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { NewLineKind } from "typescript";
import { AddEditLink } from "./AddEditLink";
import { Link } from "./Link";
import { LinkItem } from "./LinkItem";
import "./Zad02.css";
import { Zad02details } from "./Zad02details";

type State = {
    showDetails: boolean;
    detailsIndex: number;
    addNewLinkVisibility: boolean;
    links: Link[];
};
export class Zad02 extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            showDetails: false,
            addNewLinkVisibility: false,
            detailsIndex: 0,
            links: [
                new Link(
                    "Google",
                    "http://www.google.com",
                    "Strona pozwalająca na wyszukiwanie w internecie"
                ),
                new Link(
                    "StackOverflow",
                    "http://www.stackoverflow.com",
                    "Strona, na której można poszukać informacji na problemy programistyczne"
                ),
                new Link(
                    "Politechnika Częstochowska",
                    "https://pcz.pl",
                    "Główna strona Politechniki Częstochowskiej"
                ),
                new Link(
                    "PCz WIMiI",
                    "https://wimii.pcz.pl",
                    "Strona Wydziału Inżynierii Mechanicznej i Informatyki Politechniki Częstochowskiej"
                ),
                new Link(
                    "PCz e-learning",
                    "https://moodle2021.pcz.pl/",
                    "Strona e-learningowa Politechniki Częstochowskiej"
                ),
            ],
        };
    }

    render() {
        return (
            <>
                <Button className="float-left" onClick={this.changeAddNewLinkVisibility}>Dodaj</Button>
                {this.state.addNewLinkVisibility && <AddEditLink
                    title="Dodaj nowy link"
                    link={null}
                    addEditLink={this.addLink}
                    changeEditVisibility={this.changeAddNewLinkVisibility}
                ></AddEditLink>}
                <ListGroup as="ul">
                    {this.state.links.map(
                        (l, index) =>
                            !l.hidden && (
                                <LinkItem
                                    link={l}
                                    index={index}
                                    showDetails={this.showDetails}
                                    hideLink={this.hideLink}
                                    editLink={this.editLink}
                                ></LinkItem>
                            )
                    )}
                    {this.state.showDetails && (
                        <Zad02details link={this.state.links[this.state.detailsIndex]}></Zad02details>
                    )}
                </ListGroup>
            </>
        );
    }

    showDetails = (index: number) => {
        this.setState((state) => ({
            ...state,
            showDetails: !state.showDetails,
            detailsIndex: index,
        }));
    };
    hideLink = (index: number) => {
        this.state.links[index].hidden = true;
        this.setState((state) => ({ ...state, showDetails: false }));
        console.log(this.state.showDetails);
    };
    addLink = (link: Link) => {
        this.setState((state) => ({ ...state, links: [...state.links, link], addNewLinkVisibility: false }));
    };
    editLink = (link: Link, index: number) => {
        let newLinks = this.state.links;
        newLinks[index] = link; //{ name: link.name, url: link.url, description: link.description, hidden: false}
        this.setState((state) => ({ ...state, links: newLinks }));
    };
    changeAddNewLinkVisibility = () => {
        this.setState(state => ({...state, addNewLinkVisibility: !state.addNewLinkVisibility }) )
    }
}

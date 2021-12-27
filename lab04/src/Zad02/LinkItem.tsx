import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { useState } from "react";
import "./Zad02.css";
import { DeleteItem } from "./DeleteItem";
import { render } from "@testing-library/react";

type Properties = {
    link: {
        name: string;
        url: string;
        description: string;
        hidden: boolean;
    };
    index: number;
    showDetails: (index: number) => void;
    hideLink: (index: number) => void;
};
type State = {};
export class LinkItem extends React.Component<Properties> {
    render() {
        // const deleteItemProps = {
        //     index: this.props.index,
        //     hideLink: this.props.hideLink
        // }
        return (
            <>
                <ListGroup.Item as="li" action href={this.props.link.url}>
                    <a href={this.props.link.url}>{this.props.link.name}</a>

                    <Button
                        className="float-end"
                        onClick={() => {
                            this.props.hideLink(this.props.index);
                        }}
                    >
                        Usuń
                    </Button>
                    <Button
                        className="float-end"
                        onClick={() => {
                            this.props.showDetails(this.props.index);
                        }}
                    >
                        Pokaż szczegóły
                    </Button>
                    <br/>
                    <br/>
                    <br/>
                    <DeleteItem
                        hideLink={this.props.hideLink}
                        index={this.props.index}
                    ></DeleteItem>
                </ListGroup.Item>
            </>
        );
    }
}

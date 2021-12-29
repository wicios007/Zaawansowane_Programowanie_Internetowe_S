import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import "./Zad02.css";
import { DeleteItem } from "./DeleteItem";
import { Link } from "./Link";
import { AddEditLink } from "./AddEditLink";

type Properties = {
    link: Link,
    index: number;
    showDetails: (index: number) => void;
    hideLink: (index: number) => void;
    editLink: (link: Link, index: number) => void;
};

type State = {
    deleteConfirmation: boolean;
    editItemVisibility: boolean;
};

export class LinkItem extends React.Component<Properties, State> {

    constructor(props: Properties){
        super(props)
        this.state = {
            deleteConfirmation: false,
            editItemVisibility: false,
        }
    }

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
                        variant="outline-danger"
                        onClick={() => {
                            this.changeConfirmationVisibility();
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
                    <Button
                        className="float-end"
                        onClick={() => {
                            this.changeEditVisibility();
                        }}
                    >
                        Edytuj
                    </Button>
                    <br/>
                    <br/>
                    {this.state.deleteConfirmation && <DeleteItem changeConfirmationVisibility={this.changeConfirmationVisibility}
                        hideLink={this.props.hideLink}
                        index={this.props.index}
                    ></DeleteItem>}

                    {this.state.editItemVisibility && <AddEditLink title="Edytuj link" link={this.props.link} addEditLink={this.editLink} changeEditVisibility={this.changeEditVisibility}></AddEditLink>}
                </ListGroup.Item>

            </>
        );
    }
    changeConfirmationVisibility = () => {
        this.setState(state => ({...state, deleteConfirmation: !state.deleteConfirmation }) )
    }
    changeEditVisibility = () => {
        this.setState(state => ({...state, editItemVisibility: !state.editItemVisibility }) )
    }
    editLink = (link: Link) => {
        this.props.editLink(link, this.props.index);
    }

}

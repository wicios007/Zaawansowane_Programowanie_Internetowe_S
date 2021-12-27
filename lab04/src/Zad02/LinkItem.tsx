import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import "./Zad02.css";
import { DeleteItem } from "./DeleteItem";

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
type State = {
    deleteConfirmation: boolean;
};
export class LinkItem extends React.Component<Properties, State> {

    constructor(props: Properties){
        super(props)
        this.state = {
            deleteConfirmation: false
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
                    <br/>
                    {this.state.deleteConfirmation && <DeleteItem changeConfirmationVisibility={this.changeConfirmationVisibility}
                        hideLink={this.props.hideLink}
                        index={this.props.index}
                    ></DeleteItem>}
                </ListGroup.Item>
            </>
        );
    }
    changeConfirmationVisibility = () => {
        this.setState(state => ({...state, deleteConfirmation: !state.deleteConfirmation }) )
    }
}

import React from "react";
import { Button } from "react-bootstrap";

// type State = {
// };
type Properties = {
	active: () => void,
    changeText: (text: string) => void
};

export class Zad11child extends React.Component<Properties> {

	// isActive = this.props.active;

    render() {
        return (
            <>
			Czy dalej chcesz się uczyć Reacta?
            <br/>
			<Button onClick={() => {this.props.active(); this.props.changeText("Super! Idźmy dalej :)")}}>Tak</Button>
			<Button onClick={() => {this.props.active(); this.props.changeText("Szkoda :(")}}>Nie</Button>
            </>
        );
    }
}
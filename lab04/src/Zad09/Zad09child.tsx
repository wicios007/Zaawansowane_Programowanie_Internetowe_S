import React from "react";
import { Button } from "react-bootstrap";

// type State = {
// };
type Properties = {
	active: () => void
};

export class Zad09child extends React.Component<Properties> {

	// isActive = this.props.active;

    render() {
        return (
            <>
			Drugi component
			<br/>
			<Button onClick={this.props.active}>Zamknij</Button>
            </>
        );
    }
}
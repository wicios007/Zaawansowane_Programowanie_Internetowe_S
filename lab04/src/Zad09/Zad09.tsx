import React from "react";
import { Button } from "react-bootstrap";
import { Zad09child } from "./Zad09child";

type State = {
	componentActive: boolean;
};

export class Zad09 extends React.Component<{}, State> {

    constructor(props: {}) {
        super(props);
        this.state = {
			componentActive: false,
        };
    }

    render() {
        return (
            <>
				<Button onClick={this.showComponent}>Pokaz drugi komponent</Button>
				<br/>
				{
					this.state.componentActive &&
					<Zad09child active={this.showComponent}></Zad09child>
				}
            </>
        );
    }

	showComponent = () => {
		const newState = {
			...this.state,
			componentActive: !this.state.componentActive
		}
		this.setState(newState)
	}
}
import React from "react";
import { Button } from "react-bootstrap";
import { Zad11child } from "./Zad11child";

type State = {
	componentActive: boolean,
	oneText: string
};

export class Zad11 extends React.Component<{}, State> {

    constructor(props: {}) {
        super(props);
        this.state = {
			componentActive: false,
			oneText: "",
        };
    }

    render() {
        return (
            <>
				<Button onClick={this.showComponent}>Pokaz drugi komponent</Button>
				{
					this.state.componentActive &&
					<Zad11child active={this.showComponent} changeText={this.showText}></Zad11child>
				}
				<br/>
				{this.state.oneText}
            </>
        );
    }

	showComponent = () => {
		this.setState(state => ({...state, componentActive: !state.componentActive}))
	}
	showText = (text: string) => {
		this.setState(state => ({...state, oneText: text}))
	}
}
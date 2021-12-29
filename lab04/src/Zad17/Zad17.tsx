import { TextField } from "@mui/material";
import React from "react";

type State = {
	showedText: string,
	textInput: string,
}

export class Zad17 extends React.Component<{}, State>{

	constructor(props: {}){
		super(props)
		this.state = {
			showedText: "",
			textInput: ""
		}
	}

	change = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState(state => ({ ...state, textInput: e.target.value, showedText: e.target.value }));
	}
	
	submit = (e: React.ChangeEvent<any>) => {
		e.preventDefault()
		this.setState(state => ({...state, showedText: state.textInput}))
	}

	render() {
		return(
			<>
			<p>{this.state.showedText}</p>
			<form onSubmit={this.submit} id="form-input-one">
				<TextField value={this.state.textInput} onChange={this.change} name="paragraph" label="Tekst 1" placeholder="Podaj tekst" fullWidth></TextField>
			</form>
			<br />
			<form onSubmit={this.submit} id="form-input-two">
				<TextField value={this.state.textInput} onChange={this.change} name="paragraph" label="Tekst 2" placeholder="Podaj tekst" fullWidth></TextField>
			</form>
			</>
		)
	}
}
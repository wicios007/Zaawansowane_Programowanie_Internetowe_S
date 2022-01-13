import { TextField } from "@mui/material";
import React from "react";

type State = {
	showedText: string,
	text: string,
}

export class Zad16 extends React.Component<{}, State>{

	constructor(props: {}){
		super(props)
		this.state = {
			showedText: "",
			text: ""
		}
	}

	change = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState(state => ({ ...state, text: e.target.value, showedText: e.target.value }));
	}
	
	submit = (e: React.ChangeEvent<any>) => {
		e.preventDefault()
		this.setState(state => ({...state, showedText: state.text}))
	}

	render() {
		return(
			<>
			<p>{this.state.showedText}</p>
			<form onSubmit={this.submit} id="create-form">
				<TextField value={this.state.text} onChange={this.change} name="paragraph" label="Tekst" placeholder="Podaj tekst" fullWidth></TextField>
			</form>
			{/* <Button type="submit" variant="contained" color="primary" form="create-form">Zatwierdź</Button> */}
			</>
		)
	}
}
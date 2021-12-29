import { Button, Card, CardContent, CardHeader, TextField } from "@mui/material";
import { link } from "fs";
import React from "react";
import { Link } from "./Link";

type Properties = {
	title: string,
	link: Link | null,
	addEditLink: (link: Link) => void,
	changeEditVisibility: () => void,
}
type State ={
	name: string,
	url: string ,
	description: string,
}
export class AddEditLink extends React.Component<Properties,State>{

	constructor(props: Properties){
		super(props)
		this.state = {
			name: props.link?.name || "",
			url: props.link?.url || "",
			description: props.link?.description || "", 
		}
	}

	change = (e: React.ChangeEvent<HTMLInputElement>) => {
		let newState = { ...this.state, [e.currentTarget.name]: e.target.value}
		this.setState(newState);
	}

	submit = (e: React.ChangeEvent<any>) => {
		e.preventDefault()
		this.props.addEditLink(new Link(this.state.name, this.state.url, this.state.description))
	}

	render(){
		return(
		<>
		<Card>
			<CardHeader title={this.props.title}>
			</CardHeader>
			<CardContent>
			<form onSubmit={this.submit} id={(this.props.link?.id+"-" || "new-") +"add-edit-link-form"}>
				<TextField value={this.state.name} onChange={this.change} name="name" label="Nazwa" placeholder="Nazwa linku" fullWidth></TextField>
				<br/>
				<TextField value={this.state.url} onChange={this.change} name="url" label="Link" placeholder="Link url" fullWidth></TextField>
				<br/>
				<TextField multiline rows={2} maxRows={4} value={this.state.description} onChange={this.change} name="description" label="Opis" placeholder="Wprowadź opis" fullWidth></TextField>
			</form>
			<Button type="submit" variant="contained" form={(this.props.link?.id+"-" || "new-") +"add-edit-link-form"}>Zatwierdź</Button>
			<Button onClick={this.props.changeEditVisibility}>Zamknij</Button>
			</CardContent>
		</Card>
		</>
		);}
}
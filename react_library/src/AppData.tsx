import React from "react";
import { App } from "./App";
import { Author } from "./Model/author";

type State = {
	authors: Author[];
}

export class AppData extends React.Component<{}, State>{

	constructor(props: {}){
		super(props);
		this.state = {
			authors: []
		}
	}

	async componentDidMount() {
		let res = await fetch("https://localhost:5001/Authors")
		let authors = (await res.json()) as Author[];
		this.setState({authors: authors});
	}

	authorCreated = async (author: Author, ok: () => void) => {
		const request: RequestInit = {
			method: "POST",
			headers: {
				'content-type': "application/json"
			},
			body: JSON.stringify(author)
		};

		const res = await fetch("https://localhost:5001/Authors", request)
		const authorRes = (await res.json()) as Author;

		this.setState(state => ({...state, authors: this.state.authors.concat(authorRes)}))
		ok();
	}

	render(){
		return <App authors={this.state.authors} authorCreated={this.authorCreated}></App>

	}
}
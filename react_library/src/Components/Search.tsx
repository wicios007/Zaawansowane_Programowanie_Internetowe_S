import { Stack, TextField, Typography } from "@mui/material";
import React from "react";

type Properties = {
	numberOfAuthors: number;
	search: (str: string)=>void;
}

export class Search extends React.Component<Properties>{
	change = (e: React.ChangeEvent<any>) => {this.props.search(e.target.value);}
	render(){
		return(
			<>
				<Stack direction="row" spacing={2} padding={2} alignItems="center">
					<TextField label="podaj nazwisko"
					size="small"
					onInput={this.change}></TextField>
					<Typography variant="subtitle1" component="div">
						Liczba wyników:
					</Typography>
					<Typography variant="h6" component="div">
						{this.props.numberOfAuthors}
					</Typography>
				</Stack>
			</>
		)
	}
}
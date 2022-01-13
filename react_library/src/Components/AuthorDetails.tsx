import { Card, CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"
import React from "react";
import { Author } from "../Model/author";

type Properties ={
	author: Author|undefined;
	close: () => void;
}

export class AuthorDetails extends React.Component<Properties>{
	render(){
		return(
			<Card>
				<CardHeader title="Szczegóły autora"
				action={<IconButton onClick={this.props.close}>
						<CloseIcon /> </IconButton>
						}>
				</CardHeader>
				<CardContent>
					<Typography variant="h3">
						{this.props.author?.firstName}
						{this.props.author?.lastName}
					</Typography>
					<Typography variant="body1">{this.props.author?.email}</Typography>
				</CardContent>
			</Card>
		)
	}
}
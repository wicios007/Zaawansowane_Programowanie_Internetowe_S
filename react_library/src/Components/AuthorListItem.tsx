import { Avatar, ListItem, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material";
import React from "react";
import { Author } from "../Model/author";

type Properties ={
	author: Author;
	idx: number;
	authorSelected: (author:Author) => void;
}

export class AuthorListItem extends React.Component<Properties>{
	render(){
		const {author, idx} = this.props;
		return(
			<ListItem key={author.id} disablePadding>
			<ListItemButton onClick={() => this.props.authorSelected(author)}>
				<ListItemAvatar>
					<Avatar>{idx + 1}</Avatar>
				</ListItemAvatar>
				<ListItemText
					primary={`${idx + 1}. ${
						author.firstName
					} ${author.lastName}`}
					secondary={author.email}
				></ListItemText>
			</ListItemButton>
		</ListItem>
		)
	}
}
import { Button, List, ListItem } from "@mui/material";
import React from "react";
import { ListGroup } from "react-bootstrap";
import { isNewExpression } from "typescript";
import "./third.component.css";

type State  = {
    isListShown: boolean,
    title: string
}

export class Third extends React.Component<{}, State> {
    
    constructor(props: {}){
        super(props);
        this.state = {
            isListShown: true,
            title: "Ukryj liste"
        };
    }

    changeListVisibility = () => {
        const newState = {
            isListShown: !this.state.isListShown,
            title: this.state.isListShown ? "Pokazuj liste" : "Ukryj liste"
        }
        this.setState(newState);
    }
  
    links = [
    { id: 1, title: "Wimii", url: "https://wimii.pcz.pl/"},
    { id: 2, title: "Google", url: "https://www.google.com/"},
    { id: 3, title: "PCz", url: "https://pcz.pl/"},
    { id: 4, title: "React", url: "https://pl.reactjs.org/"},
  ];

  render() {
    return (
      <div>
        <Button variant = "outlined"
                color = "primary"
                    onClick = {this.changeListVisibility}>
                {this.state.title}
        </Button>
        {this.state.isListShown && 
        <List>{
                this.links.map((l, idx)) =>
                <ListItem key = {l.id}>
                    {idx + 1}. {l.title}
                </ListItem>
            }
        </List>
        }
      </div>
    );
  }
}

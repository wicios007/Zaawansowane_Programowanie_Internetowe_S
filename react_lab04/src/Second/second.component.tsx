import { Link, List, ListItem } from "@mui/material";
import React from "react";
import { ListGroup } from "react-bootstrap";
import "./second.component.css";

export class Second extends React.Component {
  links = [
    { title: "Wimii", url: "https://wimii.pcz.pl/", clicked: false },
    { title: "Google", url: "https://www.google.com/", clicked: false},
    { title: "PCz", url: "https://pcz.pl/", clicked: false},
    { title: "React", url: "https://pl.reactjs.org/", clicked: false },
  ];

  render() {
    return (
      <div>
        <ListGroup as= "ul">
          {this.links.map((l) => (
            <ListGroup.Item as = "li" action href={l.url}><a href={l.url}>{l.title}</a></ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  }
}

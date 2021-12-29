import { Card } from "@mui/material";
import React from "react";
import { Link } from "./Link";
import "./Zad02.css";

type Properties = {
    link: Link;
};

export class Zad02details extends React.Component<Properties> {
    render() {
        return (
            <>
                <Card>{this.props.link.description}</Card>
            </>
        );
    }
}

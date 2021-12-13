import React from "react";
import { AppBar, Box, Toolbar, Typography, SxProps } from "@mui/material";
import "./Zad2.css"

type Hyperlink = 
{
    id : number,
    hyperlink_name : string,
    hyperlink_address : string,
    hyperlink_class : string,
    toggle : boolean
}

type HyperlinkState = 
{
    hyperlinks : Array<Hyperlink>
}

export class Zad2 extends React.Component<{}, HyperlinkState>
{

    constructor(props:{})
    {
        super(props);
        this.state =
        {
            hyperlinks:
            [
                { id : 1, toggle : false, hyperlink_name : "youtube", hyperlink_address : "#", hyperlink_class : "background_red" },
                { id : 2, toggle : false, hyperlink_name : "facebook", hyperlink_address : "#", hyperlink_class : "background_green" },
                { id : 3, toggle : false, hyperlink_name : "usosweb", hyperlink_address: "#", hyperlink_class : "background_blue" }
            ]
        }
    }

    method = (e:any) =>
    {
        let newstate = {...this.state}
        const link = e.target;
        const linkId = link.getAttribute("h-id");
        newstate.hyperlinks.map(
            h => <li><a h-id={linkId} href={h.hyperlink_address} onClick={this.method}
            className={h.hyperlink_class}>
               {h.hyperlink_name}</a></li>
        )
        this.setState(newstate);
    }
    
    render() {
        return (
            <>
            <ol>
                {
                    this.state.hyperlinks.map
                    (
                        h => <li><a h-id={h.id} href={h.hyperlink_address} onClick={this.method}
                         className={h.hyperlink_class}>
                            {h.hyperlink_name}</a></li>
                    )
                }
            </ol>
            </>
        );
    }
}
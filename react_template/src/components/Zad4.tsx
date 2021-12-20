import React from "react";
import { AppBar, Box, Toolbar, Typography, SxProps } from "@mui/material";
import internal from "stream";

type Image =
{
    id : number,
    src : string
}

type State =
{
    images : Array<Image>
}

export class Zad4 extends React.Component<{}, State>
{
    constructor(props: {}) {
        super(props);
        this.state =
        {
            images : 
            [
                { id : 1, src : "zdjecia/zdjecie1"},
                { id : 2, src : "zdjecia/zdjecie2"},
                { id : 3, src : "zdjecia/zdjecie3"}
            ]
        }
    }

    method1 = (e: any) => {
        let newstate = { ...this.state }
        newstate.images = newstate.images
        this.setState(newstate);
    }

    render() {
        return (
            <>
                <div><button>Poprzednie</button><table>
                    <tr><td><img src={this.state.images[0].src}/></td><td>Następne</td></tr>
                </table></div>
            </>
        );
    }
}
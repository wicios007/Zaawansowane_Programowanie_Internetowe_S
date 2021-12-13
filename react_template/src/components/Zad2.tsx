import React from "react";
import { AppBar, Box, Toolbar, Typography, SxProps } from "@mui/material";
import "./Zad2.css"

type Hyperlink =
    {
        id: number,
        hyperlink_name: string,
        hyperlink_address: string,
        hyperlink_class: string,
        toggle: boolean
    }

type HyperlinkState =
    {
        hyperlinks: Array<Hyperlink>
    }

export class Zad2 extends React.Component<{}, HyperlinkState>
{

    constructor(props: {}) {
        super(props);
        this.state =
        {
            hyperlinks:
                [
                    { id: 1, toggle: false, hyperlink_name: "youtube", hyperlink_address: "#", hyperlink_class: "background_red" },
                    { id: 2, toggle: false, hyperlink_name: "facebook", hyperlink_address: "#", hyperlink_class: "background_green" },
                    { id: 3, toggle: false, hyperlink_name: "usosweb", hyperlink_address: "#", hyperlink_class: "background_blue" }
                ]
        }
    }

    method = (e: any) => {
        let newstate = { ...this.state } // kopujemy stan komponentu
        const clickedLinkId = e.target.getAttribute("h-id"); // pobieramy kontekstowo wartosc atrybutu h-id
        const hyperlinkIndex = newstate.hyperlinks.findIndex(h => h.id == clickedLinkId); // wyszukujemy indeks w tablicy (hyperlinks) dla linku ktory zostal klikniety
        newstate.hyperlinks[hyperlinkIndex].toggle = !newstate.hyperlinks[hyperlinkIndex].toggle // zmieniamy wartosc toggle na przeciwna dla linku ktory zostal kliniety
        this.setState(newstate); // ustawiamy nowy stan.
    }

    render() {
        return (
            <>
                <ol>
                    {
                        this.state.hyperlinks.map
                            (
                                h => <li key={h.id}><a h-id={h.id} href={h.hyperlink_address} onClick={this.method}
                                    className={h.toggle ? h.hyperlink_class : ""}> {/* tutaj sprawdzamy czy toggle jest true jesli tak to dodajemy klase jesli nie to pusty string */}
                                    {h.hyperlink_name}</a></li>
                            )
                    }
                </ol>
            </>
        );
    }
}
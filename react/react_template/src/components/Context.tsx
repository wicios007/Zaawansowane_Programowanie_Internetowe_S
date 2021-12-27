import React from "react";

export var number_of_visible_button = React.createContext({
    number : 1,
    setNumber : (number : number) => {}
})

export var Zad11_context = React.createContext({
    visibility: true,
    setVisibility: (visibility : boolean) => {},
    informacja: "",
    setInfo: (informacja: string) => {}
})

type hyperlink =
{
    id: number,
    name: string,
    src: string
}

export var Zad12_context = React.createContext({
    hidden_desc: true,
    hyperlinks:
    [
        { id: 1, name: "youtube", src: "#", color: "background-color: red" },
        { id: 2, name: "fb", src: "#", color: "background-color: green" },
        { id: 3, name: "9gag", src: "#", color: "background-color: blue" }
    ],
    viewDescription: (id: number) => {}
})
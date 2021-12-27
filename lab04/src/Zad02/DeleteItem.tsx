import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import "./Zad02.css";

type Properties = {
    index: number;
    hideLink: (index: number) => void;
};
export let DeleteItem = (props: Properties) => (
    <>
        Czy na pewno chcesz usunąć?
        <Button className="float-end">Nie</Button>
        <Button
            className="float-end"
            onClick={() => {
                props.hideLink(props.index);
            }}
        >
            Tak
        </Button>
    </>
);

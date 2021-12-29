import { Button } from "react-bootstrap";
import "./Zad02.css";

type Properties = {
    index: number;
    hideLink: (index: number) => void;
    changeConfirmationVisibility: () => void;
};
export let DeleteItem = (props: Properties) => (
    <>
        Czy na pewno chcesz usunąć?
        <Button className="float-end" onClick={() => {props.changeConfirmationVisibility()}}>Nie</Button>
        <Button
            className="float-end"
            variant="danger"
            onClick={() => {
                props.hideLink(props.index);
            }}
        >
            Tak
        </Button>
    </>
);

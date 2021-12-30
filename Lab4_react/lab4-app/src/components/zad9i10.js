import { Button, Card, CardGroup } from "react-bootstrap";
import Zad9i10s from "./zad9i10s";
import { useState } from "react";

function Zad9i10(props) {
  const [content, setContent] = useState("");
  const [hide, setHide] = useState("false");

  const onContent = () => {
    setContent((state) => (state = "I'm working "));
  };
  const showComponent = () => {
    setHide((state) => !state);
  };
  return (
    <Card>
      <h4>The first component!</h4>
      <CardGroup>
        <Button className="btn btn-primary" onClick={showComponent}>
          Show
        </Button>
        <div>{hide && <Zad9i10s active={showComponent}></Zad9i10s>}</div>
      </CardGroup>
    </Card>
  );
}

export default Zad9i10;

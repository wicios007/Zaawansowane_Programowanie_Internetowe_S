import { Card, CardGroup } from "react-bootstrap";
import { useState } from "react";

function Zad1() {
  const [text, setTextChange] = useState("Anna");

  function showText() {
    setTextChange("Ania");
  }

  return (
    <Card className="m-1">
      <div>
        <button className="btn btn-primary" onClick={showText}>
          Show text
        </button>
        <CardGroup>
          <p>{text}</p>
        </CardGroup>
      </div>
    </Card>
  );
}
export default Zad1;

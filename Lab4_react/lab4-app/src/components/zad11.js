import { Button, Card } from "react-bootstrap";
import Zad11s from "./zad11s";
import { useState } from "react";

function Zad11() {
  const [showSecond, setShowSecond] = useState(false);
  const [text, setText] = useState("");
  const onSecondShow = () => {
    setShowSecond((state) => !state);
  };
  return (
    <Card>
      <Button className="m-1" onClick={onSecondShow}>
        Show_second
      </Button>
      <h5>{text}</h5>
      {showSecond && <Zad11s active={setShowSecond} content={setText} />}
    </Card>
  );
}

export default Zad11;

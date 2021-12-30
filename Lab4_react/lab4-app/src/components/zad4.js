import { Button, Card, Row, Col } from "react-bootstrap";
import { useState } from "react";
function Zad4() {
  const [counter, setCounter] = useState(0);

  function addBtn() {
    setCounter((state) => state + 1);
  }
  function minusBtn() {
    setCounter((state) => state - 1);
  }
  return (
    <Card>
      <Row>
        <Col xs={3}>
          <Button className="btn btn-primary m-2" onClick={addBtn}>
            +1
          </Button>
        </Col>
        <p>{counter}</p>
        <Col xs={3}>
          <Button className="btn btn-primary m-2" onClick={minusBtn}>
            -1
          </Button>
        </Col>
      </Row>
    </Card>
  );
}
export default Zad4;

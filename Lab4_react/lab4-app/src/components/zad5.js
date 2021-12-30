import { Button, Card, Col, Row } from "react-bootstrap";
import { useState } from "react";

function Zad5() {
  const [counter, setCounter] = useState(0);

  return (
    <Card>
      <Row>
        <Row>
          <Col xs={3}>
            <Button
              className="btn btn-primary"
              onClick={() => setCounter((state) => state + 1)}
            >
              +1
            </Button>
          </Col>
          <Col xs={3}>
            <Button
              className="btn btn-primary"
              onClick={() => setCounter((state) => state - 1)}
            >
              -1
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <p>{counter}</p>
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <Button
              className="btn btn-primary"
              onClick={() => setCounter((state) => state + 2)}
            >
              +2
            </Button>
          </Col>
          <Col xs={3}>
            <Button
              className="btn btn-primary"
              onClick={() => setCounter((state) => state - 2)}
            >
              -2
            </Button>
          </Col>
        </Row>
      </Row>
    </Card>
  );
}
export default Zad5;

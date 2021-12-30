import { Card, CardGroup } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import Zad2 from "./zad2";

function Zad12(props) {
  return (
    <Card>
      <CardGroup>
        <CardHeader>Description: {props.content}</CardHeader>
      </CardGroup>
    </Card>
  );
}

export default Zad12;

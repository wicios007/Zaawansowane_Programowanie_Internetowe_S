import { Button, Card } from "react-bootstrap";
function Zad9i10s(props) {
  return (
    <Card>
      <p>{props.content}</p>
      <br />
      <Button className="btn btn-primary" onClick={props.active}>
        Hide
      </Button>
    </Card>
  );
}
export default Zad9i10s;

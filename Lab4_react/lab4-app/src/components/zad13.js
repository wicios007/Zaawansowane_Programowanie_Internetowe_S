import { Button, Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

function Zad13(props) {
  return (
    <Card>
      <CardHeader>
        <h5>Please, confirm your choice</h5>
        <Button
          className="m-2"
          onClick={() => {
            props.setlinks((state) =>
              state.filter(function (val, index) {
                return index !== props.idx;
              })
            );
            props.active(false);
          }}
        >
          {" "}
          Ye
        </Button>
        <Button onClick={() => props.active(false)}> No</Button>
      </CardHeader>
    </Card>
  );
}
export default Zad13;

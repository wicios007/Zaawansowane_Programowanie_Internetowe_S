import { Button } from "react-bootstrap";

function Zad11s(props) {
  return (
    <>
      <h5 className="text-center">
        Czy chcesz dalej uczyć się biblioteki React?
      </h5>
      <Button
        className="m-1"
        onClick={() => {
          props.active(false);
          props.content("Ciesze się! idźmy dalej!");
        }}
      >
        Tak
      </Button>
      <Button
        className="m-1"
        onClick={() => {
          props.active(false);
          props.content("Przykro mi, ze sie męczysz!");
        }}
      >
        Nie
      </Button>
    </>
  );
}

export default Zad11s;

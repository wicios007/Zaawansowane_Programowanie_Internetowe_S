import { Button } from "react-bootstrap";

function Zad14s(props) {
  return (
    <>
      <img
        style={{ width: "200px", height: "200px" }}
        src={props.gallery[props.index].src}
        alt={props.gallery[props.index].name}
      ></img>
    </>
  );
}
export default Zad14s;

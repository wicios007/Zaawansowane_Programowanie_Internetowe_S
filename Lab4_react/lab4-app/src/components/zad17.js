import React from "react";
import { Form } from "react-bootstrap";
import { useRef, useState } from "react";
import Zad17s from "./zad17s";
function Zad17(props) {
  const inpRef = useRef();
  const [inp1, setInp1] = useState("");

  return (
    <>
      <Form>
        <Form.Group>
          <header>Input from component 1</header>
          <Form.Control
            name="inp1"
            ref={inpRef}
            type="text"
            placeholder="Provide text"
            onChange={() => setInp1(inpRef.current.value)}
          />
        </Form.Group>
      </Form>
      <Zad17s value={inp1} setValue={setInp1} />
    </>
  );
}
export default Zad17;

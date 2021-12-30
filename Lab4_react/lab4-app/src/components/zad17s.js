import React from "react";
import { Form } from "react-bootstrap";
import { useRef, useState } from "react";

function Zad17s(props) {
  const inp2Ref = useRef();
  const [inp2, setInp2] = useState("");

  return (
    <>
      <Form>
        <Form.Group>
          <header>Input from component 2</header>
          <Form.Control
            name="inp2"
            ref={inp2Ref}
            type="text"
            placeholder="Provide text"
            value={props.value}
            onChange={() => setInp2(inp2Ref.current.value)}
          />
        </Form.Group>
      </Form>
    </>
  );
}
export default Zad17s;

import React from "react";
import { useRef, useState } from "react";
import { Form } from "react-bootstrap";
function Zad16() {
  const inputRef = useRef();
  const [text, setText] = useState("");

  const onInput = (e) => {
    e.preventDefault();
    setText(inputRef.current.value);
  };
  return (
    <>
      <Form onChange={onInput}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Type text"
            name="email"
            ref={inputRef}
          />
        </Form.Group>
        {/* <Button type="submit">confirm</Button> */}
      </Form>
      <div>
        <h5>{text}</h5>
      </div>
    </>
  );
}
export default Zad16;

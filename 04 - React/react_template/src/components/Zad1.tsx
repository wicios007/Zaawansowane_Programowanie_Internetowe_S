import React, { useState } from "react";
import logo from "./logo.svg";



function Zad1() {
const [state, setstate] = useState("Press button")
function handleClick()
{
  setstate("Patryk Adamczyk");

}
  return (
    <>
      <p>{state}</p>
      <button onClick={handleClick}>The button</button>
    </>
  );
}

export default Zad1;

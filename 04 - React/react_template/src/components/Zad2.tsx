import { link } from "fs";
import React, { useState } from "react";
import "./Zad2.css";

function Zad2() {
  const [state, setstate] = useState("zad2div");
  function handleStyle(event:any) {
    event.preventDefault();
    setstate("zad2div-change");
  }

  const tablica = [
    { nazwa: "name1", link: "link1" },
    { nazwa: "name2", link: "link2" },
    { nazwa: "name3", link: "link3" },
  ];
  const listItems = tablica.map((item) => (
    <div onClick={handleStyle} className={state}>
      <a href={item.link}>{item.nazwa}</a>
    </div>
  ));
  return <>{listItems}</>;
}

export default Zad2;

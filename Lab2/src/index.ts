import { Observable, fromEvent, scan } from "rxjs";
import { mapTo } from "rxjs/operators";

/*
let click = fromEvent(document, 'click');
let one = click.pipe(mapTo(1));
let a = 0;
let count = one.pipe(scan((acc, ones) => acc + ones, a))


const d = document.getElementById("d");
const p = document.createElement("p");

count.subscribe(x => console.log("Liczba klikniec: ", x));

count.subscribe(z => p.innerHTML = `Liczba klikniec:  ${z}`);

d?.appendChild(p);
*/



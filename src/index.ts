//Zad1
var tab:number[];
tab = [1,3,5,2,10,4];

var suma = tab.reduce((a, b) => a + b, 0)
console.log(suma);

//Zad2
var parzyste = tab.filter(function(item)
{return (item % 2 == 0);}).reduce((a, b) => a + b, 0);
console.log(parzyste);

//Zad3
var wieksze = tab.filter(function(item)
{return (item > 4);}).reduce((a, b) => a + b, 0);
console.log(wieksze);

//Zad4
function wiekszaOd (liczba:number) : number[]
{
    return tab.filter(function(item){return (item > liczba)});
}

var wieksze = wiekszaOd(3).reduce((a, b) => a + b, 0);
console.log(wieksze);

//Zad5
function add(x: number): (y: number) => number {
    return function(y: number): number {
        return x + y;
    }
}

//Zad7
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs';

let paragraf = <HTMLElement>document.getElementById("paragraf");

paragraf.pipe(
  tap(n => {
    if (n > 1) {
      document.getElementById("paragraf").innerHTML="Nacisnales ${n}  razy`"
    }
  })
 )
 .subscribe(console.log);

let element = <HTMLElement>document.getElementById("element");
let zrodlo = fromEvent(document, "mousemove")
.pipe(map((e: MouseEvent) => {
return {
x: e.clientX,
y: e.clientY
}
}));
zrodlo.subscribe(e => {
element.style.left = e.x+"px";
element.style.top = e.y+"px";
});
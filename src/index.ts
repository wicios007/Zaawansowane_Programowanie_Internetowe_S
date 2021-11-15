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
import { take, tap } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs';

let button = <HTMLElement>document.getElementById("button");
let buttonObservable = fromEvent(button,'click');

let liczba = 0;
let liczbaOf = of(liczba);

function funkcja_klik()
{
  liczbaOf.pipe(
  take(5),
  //map (n => { n = n + 1; } ),
  tap(n => { document.getElementById("paragraf").innerHTML="Przycisk zablokowany"; })
 );
}

/*buttonObservable.subscribe( (event) => {
   liczba = liczba + 1;
   document.getElementById("paragraf").innerHTML="Nacisnales "+liczba+" razy";
});*/

//Zad9

const ClickEvent = 
buttonObservable.pipe(
  take(5),
  map (n => { liczba = liczba + 1; } ),
  tap(n => {
    document.getElementById("paragraf").innerHTML="Nacisnales "+liczba+" razy";
  })
);
const subscribe = ClickEvent.subscribe();

//Zad10



/*let element = <HTMLElement>document.getElementById("element");
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
});*/
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
let tabl: Array<string> = ["5", "Ala", "1", "Ewa", "12.5","1.25","0.33","11","Korki"]
let tabel:Array<number>=[5,6,7,8,9,2,3,4]
/*let zmm=0;
function czyl() {

    for (let i = 0; i < tabl.length; i++) {
        let val = parseInt(tabl[i]);
        if (!isNaN(val)) {
            zmm += val
        }
    }

    console.log(zmm)
}

czyl()*/
let suma = (tabel:Array<number>) => tabel.reduce((a,b)=>a+b,0);
let filtruj = (tabl:Array<string>) => tabl.filter(n => +n).map(Number);

console.log(suma(tabel))
console.log(filtruj(tabl))
console.log(filtruj(tabl).reduce((a,b)=>a+b,0))

//https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
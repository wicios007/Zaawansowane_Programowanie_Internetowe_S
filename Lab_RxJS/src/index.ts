let array1 = [2,6,3,8,3,2,8,2,7,2];

let Zad1: (arr:number[]) => number;

Zad1 = function (arr:number[]):number {
    var suma: number = 0;
    arr.forEach(element => {
        suma += element;
    })
    return suma;
}

console.log("Wynik Zadania 1: ", Zad1(array1))
console.log("-------------------------------")

let Zad2:(arr:number[]) => number;

Zad2 = function(arr:number[]):number {
    var suma: number =0;
    arr.forEach(element =>{
        if(element%2==0)
            suma+=element;
    })
    return suma; 
}

console.log("Wynik Zadania 2: ", Zad2(array1))
console.log("-------------------------------")

let Zad3:(arr:number[], num:number) => number;

Zad3 = function(arr:number[], num:number):number {
    var suma: number =0;
    arr.forEach(element =>{
        if(element>num)
            suma+=element;
    })
    return suma; 
}

console.log("Wynik Zadania 3: ", Zad3(array1,6))
console.log("-------------------------------")

let WiekszeOd:(num1:number, num2:number) => boolean;
let Zad4:(arr:number[],num:number) => number;

WiekszeOd = function (num1:number, num2:number):boolean{
    if(num1>num2)
        return true;
    else return false;
}

Zad4 = function(arr:number[],num:number):number{
    let suma:number = 0;
    arr.forEach(element => {
        if(WiekszeOd(element,num))
            suma+=element

    })
    return suma;
}

console.log("Wynik Zadania 4: ", Zad4(array1,7))
console.log("-------------------------------")


let array2 = ["Toma2sz", "Technika32", "Z4j3ci4","g5ra"]

let Zad6:(arr:String[]) => number;

Zad6 = function(arr:String[]):number{
    let suma:number = 0;
    arr.forEach(element =>{
        
    })
    return suma;
}


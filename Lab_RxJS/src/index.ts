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



function currying_zad5<T1, T2, T3>(fn:(arg1:T1, arg2:T2)=>T3) {
    return (a1:T1)=>(a2:T2)=>fn(a1,a2);
}

function wiekszeOd2(num1:number, num2:number):number{
    if(num1>num2)
        return num1;
    else return 0;
}

let Zad5:(arr:number[],num:number) => number;

Zad5 = function(arr:number[],num:number) {
    let sum = 0;
    arr.forEach(element => sum += currying_zad5(wiekszeOd2)(element)(num));
    return sum;
}

console.log("Wynik Zadania 5: ", Zad5(array1,2))
console.log("-------------------------------")


let array2 = ["Tomasz", "32", "4","Nowak","52.3"]

let Zad6:(arr:string[]) => number;

Zad6 = function(arr:string[]):number{
    let suma:number = 0;
    arr.forEach(element =>{ 
            suma += parseFloat(element) || 0;
        });
    return suma;
}

console.log("Wynik Zadania 6: ", Zad6(array2))
console.log("-------------------------------")


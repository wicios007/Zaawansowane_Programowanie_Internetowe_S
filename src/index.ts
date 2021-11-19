//zadanie7
import {Observer,interval, merge} from "rxjs"
import { fromEvent } from "rxjs"
import { tap,map,filter } from "rxjs/operators"

class zadanie7
{
    private button1:HTMLElement;
    private div: HTMLElement

    // constructor (id:string)
    // {
    //     this.id=id;
    // }
    constructor(button1Id:string,divId: string)
    {
        this.button1 = <HTMLElement>document.querySelector('#${button1Id}');
        this.div = <HTMLElement>document.querySelector('#${divId}');
    }
    public start() {
        let src1$ = fromEvent(this.button1,"click");
        merge(src1$).subscribe((e:MouseEvent)=>
        this.div.innerHTML =(e.target as HTMLElement).innerHTML)
    }
}
let app = new zadanie7("button1","message");
app.start();

// const table:number[] = [1,2,3,4,5,6,7,8,9]
// //zad 1-2
// function Table(): number[]
// {
//  const Values: number[] = [1,2,3,4,5,6,7,8,9]
//  return Values;
// }
// function add(table: number[]): number {
//     let sum = 0
//     var result = table.filter(x=>x%2==0)
//                       .reduce((a,x)=>a+x,0)
//     return result
// }
// function greaterThan(y)
// {
//     return(x)=>x<y
// }
// //zad 5
// function curry2<T1,T2,T3>(fn:(arg1:T1,arg2:T2)=>T3)
// {
//     return (arg1:T1)=>(arg2:T2)=>fn(arg1,arg2)
// }
// var result = table.filter(curry2(greaterThan)(3))
// .reduce((a,x)=>a+x);
// console.log(result)
// //zad 6
// function notZero(element,index,array)
// {
//     return (element>0);
// }
// function zadanie6()
// {
//     const stringArray:string[] = ["Ala","1","Ewa","12.4"]
//     var numbersArray:number[] =[]

//     for (let entry of stringArray)
//     {
//         var results=entry.replace(/[^\d\.]*/g,'');
//         numbersArray.push(Number(results))
//         var test =numbersArray.filter(notZero)
        
//     }
//     const sum = test.reduce((a,b)=>a+b,0);
//     console.log(sum);
// }
// zadanie6()
//zadanie 1
// function hello() {
//     console.log("Hello typescript");
// }
// hello();
import { Autor } from "./Autor";
import {HtmlTableData, DataFetcherJson} from "./getData"
import {Strategy} from "./strategy"
import Zad3, {Zad3list} from "./zad3"
import { Zad5 } from "./zad5";

//zad 3 plik json
function jsonData () {
    const htmltable: Strategy = new DataFetcherJson();
    (htmltable.getAutorData('dane.json') as Promise<any>)
    .then(data => {
        console.log(data);    
    })
}
jsonData()
//zad 3 tabelka
const zad3table = new Zad3()
const zad3list = new Zad3list()

//zad 5
const zad5 = new Zad5()


//zad 4
// export class Zad4{
//     element : HTMLElement
//     form : HTMLFormElement
//     input : HTMLInputElement
//     add : HTMLButtonElement
//     sub : HTMLButtonElement
//     counter : number = 0

//     constructor(element: HTMLElement){
//         this.element = element
//         this.element.innerHTML = "Increment or decrement"
//         this.form = document.createElement("form")
//         this.input = document.createElement("input")
//         this.add = document.createElement("button")
//         this.sub = document.createElement("button")
//         this.element.appendChild(this.form)
//         this.form.appendChild(this.input)
//         this.form.appendChild(this.add)
//         this.form.appendChild(this.sub)
//         this.add.innerHTML = "+"
//         this.sub.innerHTML = "-"
//     }
//     public incordecr() {
//         this.add.addEventListener("click", (e) => {
//             e.preventDefault()
//             this.counter +=1
//             this.input.value = this.counter.toString()
//         })
//         this.sub.addEventListener("click", (e) => {
//             e.preventDefault()
//             this.counter -=1
//             this.input.value = this.counter.toString()
//         })
//     }

// }
// window.onload = () => {
//     var el = document.getElementById('content')
//     var zad4 = new Zad4(el!)
//     zad4.incordecr()
// }




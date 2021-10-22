//zadanie 1
// function hello() {
//     console.log("Hello typescript");
// }
// hello();

import { Autor } from "./Autor";
import {DataFetcher} from "./fetchData"

var fetch = new DataFetcher()
fetch.fetchData()
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




import { Author } from "./Author"
interface IGetAuthor{

}


// class Button{
//     private button:HTMLButtonElement = document.createElement("button");
//     this
// }


function hello(){
    console.log("Witaj w swiecie Typescript")
}

hello();
let author: Author = new Author("imie", "nazwisko", "dsad@wo.ll")

console.log(author.name, author.email)
// interface IOsoba {
//     imie: string;
//     nazwisko: string;
// }
// function zmien(:string)
// {
//     return <IOsoba[]>JSON.parse(json);
// }




type Osoba = {
    imie: string;
    nazwisko: string;
}   
function zmien(json:string)
{
    return <Osoba[]>JSON.parse(json);
}


// json stringify
// json stringify tabelka
// json stringiy lista
// wzorzec startegy 
// servoce binding
import { Autor } from "./autor";

function hello()
{
    console.log("Witaj w swiecie Typescript");
}

hello();

let autor1 = new Autor("Patryk", "Adamczyk", "patryk.adamczyk.789@gmail.com");
autor1.checkEmail;
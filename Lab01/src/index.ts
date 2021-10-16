function hello(){
    console.log("Witaj w swiecie Typescript")
}

hello();


// interface IOsoba {
//     imie: string;
//     nazwisko: string;
// }
// function zmien(json:string)
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

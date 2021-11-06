import { Autor } from "./autor";

export class Zad5{
    autorzy: Autor[] = []

    constructor(){}

    async getData(): Promise<Autor[]> {
        const response = await fetch("dane.json")
            .then(res => res.json())
            .then(dane => dane.map(d => <Autor>d))
            .then(authors => authors.forEach(p => {
                this.autorzy.push(p)
            }
            ));
            console.log(this.autorzy);

        return this.autorzy;
    }

    buildList() : Element | string{
        let table : Element = document.createElement("table");
        let tr : Element = document.createElement("tr");
        let thFirstName : Element = document.createElement("th");
        thFirstName.innerHTML = "Imię";
        let thLastName : Element = document.createElement("th");
        thLastName.innerHTML = "Nazwisko";
        let thEmail : Element = document.createElement("th");
        thEmail.innerHTML = "Email";
        tr.append(thFirstName);
        tr.append(thLastName);
        tr.append(thEmail);
        table.append(tr);
        this.autorzy.forEach(author => {
            let newTrAuthorElement = document.createElement("tr");
            let newTdFirstName = document.createElement("td");
            newTdFirstName.innerText = author.imie;
            newTrAuthorElement.append(newTdFirstName);

            let newTdLastName = document.createElement("td");
            newTdLastName.innerText = author.nazwisko;
            newTrAuthorElement.append(newTdLastName);

            let newTdEmail = document.createElement("td");
            newTdEmail.innerText = author.email;
            newTrAuthorElement.append(newTdEmail);
            table.append(newTrAuthorElement);
            document.getElementById("zad6").append(author.email);
        })
        document.getElementById("zad6").append(table);

        return table;


    }


}
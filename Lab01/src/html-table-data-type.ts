import { Author } from "./Author"
import { IDataType } from "./interfaces/data-type.interfaces"

export class HtmlTableDataType implements IDataType{
    constructor(private authors: Author[]){}

    getData(): Element | string {
        let table: Element =  document.createElement("table");
        let trh: Element = document.createElement("tr");

        // let thId: Element = document.createElement("th");
        // thId.innerHTML = "ID";
        let thName: Element = document.createElement("th");
        thName.innerHTML = "Name";
        let thSurname: Element = document.createElement("th");
        thSurname.innerHTML = "Surname";
        let thEmail: Element = document.createElement("th");
        thEmail.innerHTML = "Email";

        trh.append(thName);
        trh.append(thSurname);
        trh.append(thEmail);

        table.append(trh);

        this.authors.forEach(author => {
            let tr: Element = document.createElement("tr");

            // let tdId: Element = document.createElement("td");
            // tdId = author.id

            let tdName: HTMLTableCellElement = document.createElement("td");
            tdName.innerText = author.name;
            tr.append(tdName);

            let tdSurname: HTMLTableCellElement = document.createElement("td");
            tdSurname.innerText = author.surname;
            tr.append(tdSurname)

            let tdEmail: HTMLTableCellElement = document.createElement("td");
            tdEmail.innerText = author.email;
            tr.appendChild(tdEmail);

            table.append(tr)
        });

        return table;
    }
    
}
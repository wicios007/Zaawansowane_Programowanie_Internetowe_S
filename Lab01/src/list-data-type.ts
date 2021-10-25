import { Author } from "./Author"
import { IDataType } from "./interfaces/data-type.interfaces"

export class ListDataType implements IDataType{

    constructor(private authors: Author[]){}
    getData(){
        let list: Element = document.createElement("ul");
        this.authors.forEach(author => {
            let li = document.createElement("li");
            li.innerText = `${author.name} ${author.surname} - ${author.email}`;
            list.append(li);
        });
        return list;
    }
}
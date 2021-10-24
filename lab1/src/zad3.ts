import { HtmlListData, HtmlTableData } from "./getData";
import { Strategy } from "./strategy";

export default class Zad3Table{
    constructor(){
    const id = document.getElementById("test")
    const tabela: Strategy = new HtmlTableData()
    console.log(tabela.getAutorData(id))
    }
}
export class Zad3list{
    constructor(){
        const id = document.getElementById("list")
        const list: Strategy = new HtmlListData()
        console.log(list.getAutorData(id))
    }
}

import {Autor} from "./Autor"
import { DataFetcherJson } from "./getData"
import { Strategy } from "./strategy"

interface Switch {
    imie: String
    nazwisko: String
}
export class Zad5{
    private _autors: Autor[]

    constructor(){
        const dataFetcher: Strategy = new DataFetcherJson();
        (dataFetcher.getAutorData('dane.json') as Promise<any>)
        .then(data => {
            this._autors = data.map(x => new Autor(x.imie, x.nazwisko));
            console.log(this._autors)    
        })
        .catch(error => {
            console.log(error)
        })
    }
}
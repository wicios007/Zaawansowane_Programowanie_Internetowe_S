import {Blog} from "./Blog"
import {Autor} from "./Autor"
import {Komentarz} from "./Komentarz"
import { Strategy } from "./strategy"

export class DataFetcher implements Strategy{
    getAutorData(): Autor[] {
        throw new Error("Method not implemented.")
    }
    
fetchData(): Autor [] {
    var autor: Autor []
    fetch('dane.json',{
        headers: {
        'Content-Type': 'application/json',
        'Accept' : 'application/json'
        }       
    })
    .then(res => res.json())
    .then(data => data.map((d: Autor) => <Autor>d))
    .then(autor => autor.forEach((p: { id: string; imie: string; nazwisko: string; email: string }) => {
         console.log(p.id + " " + p.imie + " " + p.nazwisko + " " + p.email);
     }))
     return autor
}
}

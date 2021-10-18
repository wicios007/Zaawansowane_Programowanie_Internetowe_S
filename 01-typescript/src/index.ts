import {Artykul} from './artykul';
import {Autor} from './autor';
import {Blog} from './blog'
import {Komentarz} from './komentarz'
import {IDataType} from './interfaces/IDataType'
import {Zad4} from './zad4';

function zad3(){
    //from json
    fetch('./../dane.json')
        .then(res=>res.json())
        .then(data=>data.map(d=><Autor>d))
        .then(autor=>autor.foreach(p=>{
            console.log(p.id + " " + p.imie + " " + p.nazwisko + " " + p.email);
        }));

}


function main(){
    var input = new Zad4();
    
}



import {Autor} from './autor';
import {IDataShow} from './IDataShow';

export class JSONDataShow implements IDataShow{
     t:Autor[];
    
    showData(name:string){
        
        fetch(name)
        .then(res=>res.json())
        .then(dane=>dane.map(d=><Autor>d))
        .then(autor=>autor.forEach(a=>{
            console.log(a);
        }))

        return this.t;
    }
}
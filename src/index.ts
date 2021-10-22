import { Autor } from "./autor";
import { Blog }  from "./blog"
import { IDataShow } from "./IDataShow";
import {JSONDataShow} from './JSONDataShow'
function hello(){
    console.log("Witaj")
}
hello();
var b:Autor = new Autor("aa","aa","aa")
// console.log(b)

var c:IDataShow = new JSONDataShow();
var chuj:Autor[]=c.showData('autorzy.json')
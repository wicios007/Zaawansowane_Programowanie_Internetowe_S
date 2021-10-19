import {Autor} from "./Autor"

export interface Strategy {
    getAutorData() : Autor []
}
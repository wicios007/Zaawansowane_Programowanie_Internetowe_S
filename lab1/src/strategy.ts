import {Autor} from "./Autor"

export interface Strategy {
    getAutorData(item: HTMLElement | string) : Autor [] | Promise<Autor[]>
}
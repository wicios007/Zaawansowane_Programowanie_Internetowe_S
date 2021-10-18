import { Autor } from "./models/autor";

export interface Strategy {
    getAuthorData(): Autor[];
}
import { IEmail } from "./IEmail";

export interface IAuthor{
    id : number,
    firstName : string,
    lastName : string
    emails : IEmail[]
}
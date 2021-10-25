import { Author } from "./Author"
import { IDataType } from "./interfaces/data-type.interfaces"

export class JsonDataType implements IDataType{

    constructor(private authors: Author[]){}
    getData(){
        let json = JSON.stringify(this.authors, null, "\t");
        return json;
    }
}
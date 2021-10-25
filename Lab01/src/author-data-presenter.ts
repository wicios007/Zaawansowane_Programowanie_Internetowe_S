import { IDataType } from "./interfaces/data-type.interfaces"
export class AuthorDataPresenter
{
    constructor(private dataType: IDataType) {
        
    }

    showData(): void{
        document.body.append(this.dataType.getData())
    }
}
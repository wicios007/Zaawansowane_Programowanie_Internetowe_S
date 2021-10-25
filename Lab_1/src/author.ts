class Author {
    private _id : number;
    private _name : string;
    private _lastName : string;
    private _email : string;

    public name : string;
    public lastName : string;
    public email : string;

    constructor(name : string, lastName : string){
        this._name = name;
        this._lastName = lastName
    }

    //sprawdzenie emaila

    // private static _objCount: number = 0
    // Author._id = _objCount;
    //_objCount ++;
}
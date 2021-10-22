class Autor{


    private _id:number;
    private _name:string;
    private _sname:string;
    private _email:string;

    get name(): string {return this._name;}
    set name(value:string){ this._name = value;}

    get sname(): string {return this._sname;}
    set sname(value:string){ this._sname = value;}

    get email(): string {return this._email;}
    set email(value:string){this._email = value;}


    constructor( id:number, name:string, sname:string){
        this._id = id;
        this._name= name;
        this._sname = sname;
    }
}
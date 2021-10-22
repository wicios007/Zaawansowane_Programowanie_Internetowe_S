class Blog{
    private _id:number;
    private _name:string;
    private _autor: Autor;
    private _article:Article[];


    get name(): string {return this._name;}
    set name(value:string){this._name = value;}

    get autor():Autor {return this._autor;}
    set autor(value:Autor){this._autor = value;}

    constructor(name:string, autor:Autor){
        this._name = name;
        this._autor = autor;
    }

    addArticle(article:Article) {

     }
     getArticle(article:Article){

     }

     //getTitleArticle(){}
//getTitleArticl2e(){}

}

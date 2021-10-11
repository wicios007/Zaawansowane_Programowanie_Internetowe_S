class Blog extends Autor{
    _id: number;
    _nazwa: string;
    _autor: Autor;
    _artykuły: Artykuł[];

    constructor(_id:number, _nazwa:string, _autor:Autor, _artykuly:Artykuly[]) {
        this._id = id;
        this._nazwa = nazwa;
        this._autor = autor;
        this._artykuly = artykuly
    }
}





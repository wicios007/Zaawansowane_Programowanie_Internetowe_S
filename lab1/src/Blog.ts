
class Blog extends Autor{
    private _id: number
    private _nazwa: string
    private _autor: Autor
    private _artykuly: Artykul[]

    get nazwa(): string {return this._nazwa}
    get autor(): string {return this._autor}

    constructor(nazwa: string, autor: Autor){
        super(autor, nazwa)
    }
}
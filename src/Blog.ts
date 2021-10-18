class Blog {
    private _id: number;
    private _nazwa: string;
    private _autor: Autor;
    private _artykuly: Artykul[];

    constructor(nazwa: string, autor: Autor)
    {
        this._nazwa = nazwa;
        this._autor = autor;
    }

    /*public get nazwa(): string {return this._nazwa; }
    public set nazwa(value: string) {this._nazwa = value; }

    public get autor(): Autor {return this._autor; }
    public set autor(value: Autor) {this._autor = value; }*/

    public dodajArtykul(artykul: Artykul): void{
        this._artykuly.push(artykul)
    }

   /* public pobierzTytulArtykulow(): string[]{
        let tytuly: string[] = [];

        this._artykuly.forEach(artykul => {
            tytuly.push(artykul.tytul)
        });
        return tytuly;
    }*/

    public pobierzArtykul(tytul: string) {
        return this._artykuly[tytul];
    }
}
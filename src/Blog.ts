class Blog 
{
    private _id:number;
    private _nazwa:string;
    private _autor:Autor;
    private _artykuly:Artykul[];

    get nazwa ()
    {
        return this._nazwa;
    }
    get Autor ()
    {
        return this._autor;
    }

    constructor (nazwa:string, autor:Autor)
    {
        this._nazwa = nazwa;
        this._autor = autor;
    }

     public dodajArtykul(artykul:Artykul):void
    {
        this._artykuly.push(artykul);
    }

     public pobierzTytulyArtykulow():string[]
    {
        var tytuly: string[] = []
        for(let i = 0; i < this._artykuly.length; i++)
        {
            tytuly.push(this._artykuly[i].tytul);
        }
        return tytuly;
    }

    public pobierzArtykul(tytul:string):Artykul | undefined
    {
        return this._artykuly.find(a => a.tytul === tytul)
    }
  }

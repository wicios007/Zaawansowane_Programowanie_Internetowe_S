class Blog{
    _id: number;
    _nazwa: string;
    _autor: Autor;
    _artykuły: Artykuł[];

    constructor(nazwa:string, autor:Autor) {
        this._nazwa = nazwa;
        this._autor = autor
    }

    dodajArtykul(artykul:Artykul): void{
        
    }

    pobierzTytulyArtykulowi(): string{
       
    }

    pobierzArtykuly(tytul:String){
        
    }
}





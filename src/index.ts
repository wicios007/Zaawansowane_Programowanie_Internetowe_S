function hello() {
    console.log("Witaj w swiecie Typescript");

}
hello();

class Blog{
    _id : number;
    _nazwa : string;
    _autor: Autor ;
    _artykuly : Artykul[];

    constructor(nazwa: string, autor: Autor)
    {
        this._nazwa = nazwa;
        this._autor = autor;
    }
    dodajArtykul(artykul: Artykul)
    {

    }
}
class Artykul{

}

class Autor{

}
class Komentarz{

}
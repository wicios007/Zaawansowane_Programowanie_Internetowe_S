class Blog{
    private _id:number;
    private _nazwa:string;
    private _autor: Autor;
    private _artykul:Artykul[];

    get nazwa():string {return this._nazwa;}
    get autor():Autor {return this._autor;}

constructor(nazwa:string, autor:Autor){
    this._nazwa=nazwa;
    this._autor=autor;

}
dodajArtykul(artykul:Artykul):void{
    
}
pobierzTytulArtykulow():string[]{
    
}

pobierzArtykul(tytul:string){

}



}
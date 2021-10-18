class Blog{
  private _id:number;    
  private _nazwa: string;
  private _autor: Autor;
  private _artykuly: Artykul[];
  
  
  
  getNazwa():string{
      return this._nazwa
  }
  
  getAutor():Autor{
      return this._autor
  }
  
  setNazwa(value: string){
      this._nazwa=value;
  }
  
  setAutor(value: Autor){
      this._autor=value;
  }
  
  constructor(nazwa:string, autor:Autor){
     
      this._nazwa=nazwa;
       this._autor=autor;
      
      }
  
  
  
  
  dodajArtykul(artyukl: Artykul):void{
  }
  
  
  pobierzTytulyArtykulow():string[]{
      return
  }
  
  pobierzArtyukl(tytul: string) {}
  
  }
class Blog {
  _id: number;
  _nazwa: string;
  _autor: AutomationRate;
  _artykuly: Artykul[];

 get nazwa(value: string){
  this._nazwa = value; 
 }

 get autor(value: Autor){
   this._autor = value
 }



}
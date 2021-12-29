import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Zad7Service {

  counter : number = 0
  
  constructor() { }

  plus(n : number){
    this.counter += n
    return this.counter
  }

  minus(n : number){
    this.counter -= n
    return this.counter
  }


}

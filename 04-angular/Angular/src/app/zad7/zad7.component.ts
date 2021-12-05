import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zad7',
  templateUrl: './zad7.component.html',
  styleUrls: ['./zad7.component.css']
})
export class Zad7Component implements OnInit {
  counter : number
  constructor() { this.counter = 0 }

  ngOnInit(): void {
  }

  plusOne(){
    this.counter++
  }
  minusOne(){
    this.counter--
  }
  plusTwo(){
    this.counter += 2
  }
  minusTwo(){
    this.counter -= 2
  }


}

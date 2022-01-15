import { Component, OnInit } from '@angular/core';
import { Zad7Service } from '../services/zad7.service';

@Component({
  selector: 'app-zad7',
  templateUrl: './zad7.component.html',
  styleUrls: ['./zad7.component.css']
})
export class Zad7Component implements OnInit {
  counter : number
  constructor(private srv : Zad7Service) { this.counter = srv.counter }

  ngOnInit(): void {
  }

  plusOne(){
   this.counter = this.srv.plus(1)
  }
  minusOne(){
    this.counter = this.srv.minus(1)
  }
  plusTwo(){
    this.counter = this.srv.plus(1)
  }
  minusTwo(){
    this.counter = this.srv.minus(2)
  }


}

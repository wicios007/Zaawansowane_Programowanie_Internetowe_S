import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zad07',
  templateUrl: `./zad07.component.html`,
  styleUrls: [`./zad07.component.css`]
})
export class Zad07Component implements OnInit {
  p1Number: number;

  constructor() {
    this.p1Number = 0;
  }

  ngOnInit(): void {
  }

  btnOnClickAddOne(){
    this.p1Number++
  }
  btnOnClickSubOne(){
    this.p1Number--
  }
  btnOnClickAddTwo(){
    this.p1Number += 2
  }
  btnOnClickSubTwo(){
    this.p1Number -= 2
  }
}

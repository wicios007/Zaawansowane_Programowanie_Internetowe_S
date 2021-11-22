import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zad01',
  templateUrl: `./zad01.component.html`,
  styleUrls: [`./zad01.component.css`]
})
export class Zad01Component implements OnInit {
  text: any
  personData = {
    firstName: "Łukasz",
    lastName: "Czech"
  }
  p1Class: any;
  fontSize: boolean = false;
  fontColor: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.text = this.personData.firstName + " " + this.personData.lastName
  }

  onClickFontSize(){
    this.fontSize = !this.fontSize
  }

  onClickFontColor(){
    this.fontColor = !this.fontColor
  } 
}

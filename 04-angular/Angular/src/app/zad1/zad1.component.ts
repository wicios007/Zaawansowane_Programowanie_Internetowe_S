import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zad1',
  templateUrl: './zad1.component.html',
  styleUrls: ['./zad1.component.css']
})
export class Zad1Component implements OnInit {

  fullName : string = ""
  textSize : boolean
  textColor : boolean
  show : boolean
  showBtn : string = "Pokaz personalia"
  constructor() {
    this.textSize = false
    this.textColor = false 
    this.show = false;
  }

  ngOnInit(): void {

  }

  showName(){
    this.show = !this.show
    this.show ? this.showBtn = "Ukryj personalia" : this.showBtn = "Pokaz personalia"
    this.fullName = "Wiktor Kibało"
  }

  bigFont(){
    this.textSize = !this.textSize
  }
  greenFont(){
    this.textColor = !this.textColor
  }

}

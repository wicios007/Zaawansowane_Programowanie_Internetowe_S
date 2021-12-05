import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zad12-first',
  templateUrl: './zad12-first.component.html',
  styleUrls: ['./zad12-first.component.css']
})
export class Zad12FirstComponent implements OnInit {

  isShowed : boolean = false
  showText : string = "Pokaż"
  constructor() { }

  ngOnInit(): void {
  }

  toggleSecond(){
    this.isShowed = !this.isShowed
    this.isShowed ? this.showText="Ukryj" : this.showText="Pokaż"
  }

}

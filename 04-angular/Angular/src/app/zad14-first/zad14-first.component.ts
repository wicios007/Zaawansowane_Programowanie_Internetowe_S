import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-zad14-first',
  templateUrl: './zad14-first.component.html',
  styleUrls: ['./zad14-first.component.css']
})
export class Zad14FirstComponent implements OnInit {

  @Input() receivedText : string = ""
  isShowed : boolean = false
  constructor() { }

  ngOnInit(): void {
    
  }

  show(){
    this.isShowed = !this.isShowed
  }
}

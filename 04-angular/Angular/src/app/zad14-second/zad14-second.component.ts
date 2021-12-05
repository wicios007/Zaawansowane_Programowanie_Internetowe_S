import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-zad14-second',
  templateUrl: './zad14-second.component.html',
  styleUrls: ['./zad14-second.component.css']
})
export class Zad14SecondComponent implements OnInit {

  @Output() sendText : EventEmitter<string> = new EventEmitter<string>()
  @Output() isActive : EventEmitter<boolean> = new EventEmitter<boolean>()
  constructor() { }

  ngOnInit(): void {
  }

  noButton(){
    this.sendText.emit("Przykro mi, że się męczysz")
    this.isActive.emit(false)
  }
  yesButton(){
    this.sendText.emit("Cieszę się! Idziemy dalej!")
    this.isActive.emit(false)
  }
}

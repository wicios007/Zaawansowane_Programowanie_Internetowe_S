import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-zad12-second',
  templateUrl: './zad12-second.component.html',
  styleUrls: ['./zad12-second.component.css']
})
export class Zad12SecondComponent implements OnInit {

  @Input() isActive : boolean = false
  @Output() deactivation : EventEmitter<boolean> = new EventEmitter<boolean>()
  constructor() { }

  ngOnInit(): void {
  }
  hide(){
    this.deactivation.emit(!this.isActive)
  }
}

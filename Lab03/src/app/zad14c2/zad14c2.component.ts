import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-zad14c2',
  templateUrl: './zad14c2.component.html',
  styleUrls: ['./zad14c2.component.css']
})
export class Zad14c2Component implements OnInit {

  @Input() isActive: boolean;
  @Output() deactivate: EventEmitter<boolean>;
  @Output() sendText: EventEmitter<string>;

  constructor() { 
    this.isActive = false;
    this.deactivate = new EventEmitter<boolean>();
    this.sendText = new EventEmitter<string>();
  }

  ngOnInit(): void {
  }

  hideComponent(){
    this.deactivate.emit(!this.isActive);
  }
  continueLearning(){
    this.sendText.emit("Cieszę się! Idźmy dalej!")
  }
  stopLearning(){
    this.sendText.emit("Przykro mi, że się męczysz!")
  }

}

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-zad12c2',
  templateUrl: './zad12c2.component.html',
  styleUrls: ['./zad12c2.component.css']
})
export class Zad12c2Component implements OnInit {

  @Input() isActive: boolean;
  @Output() deactivate: EventEmitter<boolean>;
  constructor() { 
    this.isActive = false;
    this.deactivate = new EventEmitter<boolean>();
  }

  ngOnInit(): void {
  }

  hideComponent(){
    this.deactivate.emit(!this.isActive);
  }
}

import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-zad5-third",
  templateUrl: "./zad5-third.component.html",
  styleUrls: ["./zad5-third.component.css"],
})
export class Zad5ThirdComponent implements OnInit {
  @Output() hideComponent: EventEmitter<boolean>;
  @Output() justHideComponent: EventEmitter<boolean>;

  constructor() {
    this.hideComponent = new EventEmitter<boolean>();
    this.justHideComponent = new EventEmitter<boolean>();
  }
  hide() {
    this.hideComponent.emit(false);
  }
  justHide() {
    this.justHideComponent.emit(false);
  }
  ngOnInit(): void {}
}

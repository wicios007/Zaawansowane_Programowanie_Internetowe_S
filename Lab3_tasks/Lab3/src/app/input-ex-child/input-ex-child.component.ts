import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-input-ex-child",
  templateUrl: "./input-ex-child.component.html",
  styleUrls: ["./input-ex-child.component.css"],
})
export class InputExChildComponent implements OnInit {
  @Input() item = "";
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    console.log(this.item);
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}

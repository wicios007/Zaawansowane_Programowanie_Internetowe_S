import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-zad1416-second",
  templateUrl: "./zad1416-second.component.html",
  styleUrls: ["./zad1416-second.component.css"],
})
export class Zad1416SecondComponent implements OnInit {
  @Output() sendText: EventEmitter<string>;
  @Output() isActive: EventEmitter<boolean>;

  constructor() {
    this.sendText = new EventEmitter<string>();
    this.isActive = new EventEmitter<boolean>();
  }

  ngOnInit(): void {}

  noBtn() {
    this.sendText.emit("Przykro mi, ze sie męczysz");
    this.isActive.emit(false);
  }
  yesBtn() {
    this.sendText.emit("Cieszmy się! Idziemy dalej");
    this.isActive.emit(false);
  }
}

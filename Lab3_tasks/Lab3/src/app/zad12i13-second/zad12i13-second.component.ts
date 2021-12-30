import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-zad12i13-second",
  templateUrl: "./zad12i13-second.component.html",
  styleUrls: ["./zad12i13-second.component.css"],
})
export class Zad12i13SecondComponent implements OnInit {
  @Input() isActive: boolean = false;
  @Output() deactive: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  hide() {
    this.deactive.emit(!this.isActive);
  }
}

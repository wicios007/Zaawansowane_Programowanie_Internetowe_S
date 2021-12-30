import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-zad5-second",
  templateUrl: "./zad5-second.component.html",
  styleUrls: ["./zad5-second.component.css"],
})
export class Zad5SecondComponent implements OnInit {
  @Input() details: string;

  constructor() {
    this.details = "";
  }

  ngOnInit(): void {}
}

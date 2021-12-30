import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-zad20",
  templateUrl: "./zad20.component.html",
  styleUrls: ["./zad20.component.css"],
})
export class Zad20Component implements OnInit {
  values: string = "";
  values2: string = "";
  constructor() {}

  ngOnInit(): void {}

  onKey(value: string) {
    this.values = value;
  }
  onKey2(val: string) {
    this.values2 = val;
  }

  update(value: string) {
    this.values = value;
  }
}

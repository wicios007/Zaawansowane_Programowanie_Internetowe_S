import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-zad12i13-first",
  templateUrl: "./zad12i13-first.component.html",
  styleUrls: ["./zad12i13-first.component.css"],
})
export class Zad12i13FirstComponent implements OnInit {
  isShowed: boolean = false;
  showText: string = "pokaz";

  constructor() {}

  ngOnInit(): void {}

  onDisplaySecond() {
    this.isShowed = !this.isShowed;
    this.isShowed ? (this.showText = "Ukryj") : (this.showText = "Pokaz");
  }
}

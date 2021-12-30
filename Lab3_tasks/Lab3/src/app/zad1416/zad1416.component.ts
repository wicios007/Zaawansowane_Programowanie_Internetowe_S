import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-zad1416",
  templateUrl: "./zad1416.component.html",
  styleUrls: ["./zad1416.component.css"],
})
export class Zad1416Component implements OnInit {
  receivedText: string;
  isShowed: boolean = false;

  constructor() {
    this.receivedText = "";
  }

  ngOnInit(): void {}

  show() {
    this.isShowed = !this.isShowed;
  }
  onReceive(str: string) {
    this.isShowed = !this.isShowed;
    this.receivedText = str;
  }
}

import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-zad19",
  templateUrl: "./zad19.component.html",
  styleUrls: ["./zad19.component.css"],
})
export class Zad19Component implements OnInit {
  title: string = "Type some text";
  event: string = "";
  constructor() {}

  ngOnInit(): void {}

  onChange(ev: any) {
    let str = (<HTMLInputElement>ev.target).value;
    this.event = str;
    console.log(str);
  }
}

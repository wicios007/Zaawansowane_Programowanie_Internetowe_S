import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-zad17-second",
  templateUrl: "./zad17-second.component.html",
  styleUrls: ["./zad17-second.component.css"],
})
export class Zad17SecondComponent implements OnInit {
  @Input() indexSend: number = 0;
  @Input() src: string = "";
  @Input() tableLength: number = 0;
  @Output() next: EventEmitter<string> = new EventEmitter<string>();
  @Output() prev: EventEmitter<string> = new EventEmitter<string>();

  imgList: string[];

  constructor() {
    this.imgList = [];
  }

  ngOnInit(): void {}

  onNext() {
    this.next.emit(this.src);
    console.log(this.indexSend);
  }
  onPrev() {
    this.prev.emit(this.src);
    console.log(this.indexSend);
  }
}

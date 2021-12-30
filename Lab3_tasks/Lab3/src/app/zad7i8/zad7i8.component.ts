import { Component, OnInit } from "@angular/core";
import { ServiceService } from "./service.service";

@Component({
  selector: "app-zad7i8",
  templateUrl: "./zad7i8.component.html",
  styleUrls: ["./zad7i8.component.css"],
})
export class Zad7i8Component implements OnInit {
  counter$: number;

  constructor(private _service: ServiceService) {
    this.counter$ = _service.counter.value;
  }

  modify(val: number) {
    this._service.modifyStateCounter(val);
  }

  ngOnInit(): void {
    this._service.counter.subscribe((x) => (this.counter$ = x));
  }
}

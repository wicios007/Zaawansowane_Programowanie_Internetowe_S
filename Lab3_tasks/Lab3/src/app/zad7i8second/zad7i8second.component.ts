import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ServiceService } from "../zad7i8/service.service";

@Component({
  selector: "app-zad7i8second",
  templateUrl: "./zad7i8second.component.html",
  styleUrls: ["./zad7i8second.component.css"],
})
export class Zad7i8secondComponent implements OnInit {
  counter: Observable<number>;

  constructor(private _counter: ServiceService) {
    this.counter = this._counter.counter;
  }

  ngOnInit(): void {}
}

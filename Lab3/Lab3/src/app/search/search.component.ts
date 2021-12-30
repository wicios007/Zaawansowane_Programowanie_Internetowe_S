import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
  @Input() resultsCount: number;
  @Output() search: EventEmitter<string>;

  constructor() {
    this.search = new EventEmitter<string>();
    this.resultsCount = 0;
  }

  ngOnInit(): void {}

  onChange(ev: any) {
    let str = (<HTMLInputElement>ev.target).value;
    this.search.emit(str);
  }
}

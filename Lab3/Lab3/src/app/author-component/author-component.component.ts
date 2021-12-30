import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Author } from "../author";

@Component({
  selector: "app-author-component",
  templateUrl: "./author-component.component.html",
  styleUrls: ["./author-component.component.css"],
})
export class AuthorComponentComponent implements OnInit {
  @Input() author: Author | undefined;
  @Output() closed: EventEmitter<any>;
  constructor() {
    this.closed = new EventEmitter();
  }

  ngOnInit(): void {}
  close() {
    this.closed.emit(null);
  }
}

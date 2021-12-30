import { Component, EventEmitter, Output } from "@angular/core";
import { Author } from "../../app/author";

@Component({
  selector: "app-add-author",
  templateUrl: "./add-author.component.html",
  styleUrls: ["./add-author.component.css"],
})
export class AddAuthorComponent {
  author: {
    name: string;
    lastName: string;
    email: string;
  };

  @Output() closed: EventEmitter<Author>;

  constructor() {
    this.author = {
      name: "",
      lastName: "",
      email: "",
    };
    this.closed = new EventEmitter();
  }
  close() {
    this.closed.emit(undefined);
  }
  submit() {
    this.closed.emit(
      Author.create(
        1,
        this.author.name,
        this.author.lastName,
        this.author.email
      )
    );
  }
}

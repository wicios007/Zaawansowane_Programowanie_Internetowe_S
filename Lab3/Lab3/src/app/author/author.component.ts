import { Component, OnInit } from "@angular/core";
import { Author } from "../author";

@Component({
  selector: "app-authors-list",
  templateUrl: "./author.component.html",
  styleUrls: ["./author.component.css"],
})
export class AuthorComponent implements OnInit {
  private authors: Author[]; //deklaracja listy obiektow typu Author
  displayedAuthors: Author[];
  numberOfAuthors: number = 0;
  selectedAuthor?: Author;
  isListShown: boolean;
  title: string;
  isFormShown: boolean;

  constructor() {
    this.authors = []; // przypisanie pustej tablicy do pola authors
    this.displayedAuthors = [];
    this.isListShown = true;
    this.title = "Ukryj_Liste";
    this.isFormShown = true;
  }

  ngOnInit(): void {
    this.authors.push(
      Author.create(1, "Dr Nice", "Stefan", "stefan@email.com"),
      Author.create(2, "Wladyslaw", "Reymont", "Reymont@email.com"),
      Author.create(3, "Czesłaaw", "Miłosz", "Miłosz@email.com"),
      Author.create(4, "Wisława", "Szymborska", "Szymborska@email.com"),
      Author.create(5, "Stanisław", "Łokietek", "Łokieto@email.com"),
      Author.create(6, "Krzysiek", "Kononowicz", "KononoBitch@email.com"),
      Author.create(7, "Władysław", "Jagiełło", "W.Jagiełło.com"),
      Author.create(8, "Patryk", "Skwara", "P.Skwara@email.com"),
      Author.create(9, "Wojciech", "Suchodolski", "W.Suchodolski@email.com"),
      Author.create(10, "Michau", "Holak", "M.Długonogi@email.com")
    );
    this.displayedAuthors = this.authors;
    console.log(this.authors);
  }

  showForm() {
    this.isFormShown = true;
  }

  formClosed(author: Author | undefined) {
    if (author !== undefined) {
      this.authors.push(author);
      this.displayedAuthors.push(author);
    }
    this.isFormShown = false;
  }

  change(str: string) {
    this.filterAuthorsByLastName(str);
  }

  private filterAuthorsByLastName(str: string) {
    this.displayedAuthors = this.authors.filter((e) =>
      e.lastName.includes(str)
    );
    this.numberOfAuthors = this.displayedAuthors.length;
  }

  onClick() {
    this.isListShown = !this.isListShown;
    this.title = this.isListShown ? "Ukryj_listę" : "Pokaz_liste";
  }

  changeAuthor(author: Author) {
    this.selectedAuthor = author;
  }
  authorClosed() {
    this.selectedAuthor = undefined;
  }
}

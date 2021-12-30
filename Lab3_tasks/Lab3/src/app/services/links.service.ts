import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Links } from "../zad5/links";

@Injectable({
  providedIn: "root",
})
export class LinksService {
  private linksCollection: BehaviorSubject<Links[]>;
  links$: Observable<Links[]>;

  constructor() {
    this.linksCollection = new BehaviorSubject(this.links);
    this.links$ = this.linksCollection.asObservable();
  }

  links: Links[] = [
    Links.create(
      "PCZ",
      "http://www.pcz.pl",
      "pcz is the Academy of science includes a few departments"
    ),
    Links.create(
      "WimII",
      "https://www.wimii.pcz.pl",
      "wimii is the department of pcz"
    ),
    Links.create(
      "google",
      "https://www.google.com",
      "google helps us every day ;)"
    ),
  ];

  onAdd(v1: string, v2: string, v3: string) {
    this.links.push(Links.create(v1, v2, v3));
  }

  showLog() {
    console.log(
      "links",
      this.links,
      "--------",
      "links$",
      this.links$,
      "---------",
      "linkCollection",
      this.linksCollection,
      "------------",
      "linksCollection.value",
      this.linksCollection.value
    );
  }
}

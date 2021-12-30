import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Observable } from "rxjs";
import { LinksService } from "../services/links.service";
import { Links } from "../zad5/links";
import { Validators } from "@angular/forms";

@Component({
  selector: "app-zad27-add-link-form",
  templateUrl: "./zad27-add-link-form.component.html",
  styleUrls: ["./zad27-add-link-form.component.css"],
})
export class Zad27AddLinkFormComponent implements OnInit {
  linksArray$: Observable<Links[]>;
  linkForm: FormGroup;

  constructor(private _linkService: LinksService) {
    this.linksArray$ = _linkService.links$;
    this.linkForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      url: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
    });
  }

  onAdd() {
    this.linkForm.markAllAsTouched();
    if (this.linkForm.invalid) return;
    let link = this.linkForm.value;
    this._linkService.onAdd(link.name, link.url, link.description);
  }

  ngOnInit(): void {}
}

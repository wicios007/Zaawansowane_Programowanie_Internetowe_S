import { Component, OnInit } from "@angular/core";
import { LinksService } from "../services/links.service";
import { Links } from "../zad5/links";
import { Observable } from "rxjs";

@Component({
  selector: "app-zad27",
  templateUrl: "./zad27.component.html",
  styleUrls: ["./zad27.component.css"],
})
export class Zad27Component implements OnInit {
  links: any;
  index: number;
  desc: string = "";
  isDetailsShown: boolean = false;
  showThirdComponent: boolean = false;
  hideThirdComponent: boolean = false;
  delete: string = "Usuń";
  linksArray$: Observable<Links[]>;

  constructor(private _linkService: LinksService) {
    this.links = [];
    this.index = -1;
    this.linksArray$ = _linkService.links$;
  }

  ngOnInit(): void {}
  onShow() {
    this._linkService.showLog();
  }

  clickedLink(index: number) {
    this.isDetailsShown = true;
    this.index = index;
    this.desc = this.links[this.index].description;
  }
  onClick() {
    this.showThirdComponent = true;
  }
  onHide(flag: boolean) {
    this.links.splice(this.index, 1);
    this.showThirdComponent = flag;
    this.isDetailsShown = !this.isDetailsShown;
  }
  onJustHide(flag: boolean) {
    this.showThirdComponent = flag;
  }
}

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-zad5",
  templateUrl: "./zad5.component.html",
  styleUrls: ["./zad5.component.css"],
})
export class Zad5Component implements OnInit {
  links: any;
  index: number;
  desc: string = "";
  isDetailsShown: boolean = false;
  showThirdComponent: boolean = false;
  hideThirdComponent: boolean = false;
  delete: string = "Usuń";
  nameSite: string = "";
  url: string = "";
  description: string = "";

  constructor() {
    this.links = [];
    this.index = -1;
  }

  ngOnInit(): void {
    this.links = [
      {
        name: "PCZ",
        address: "http://www.pcz.pl",
        description: "pcz is the Academy o science includes a few departments",
      },
      {
        name: "WimII",
        address: "http://www.wimii.pcz.pl",
        description: "wimii is the department of pcz",
      },
      {
        name: "google",
        address: "http://www.google.com",
        description: "google helps us every day :)",
      },
    ];
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

  onAddLink() {
    this.links.push({
      name: this.nameSite,
      address: this.url,
      description: this.description,
    });
  }
}

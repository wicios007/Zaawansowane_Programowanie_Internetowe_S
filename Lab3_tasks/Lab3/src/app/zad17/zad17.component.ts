import { Component, OnInit } from "@angular/core";
import { Galery } from "./galery";
@Component({
  selector: "app-zad17",
  templateUrl: "./zad17.component.html",
  styleUrls: ["./zad17.component.css"],
})
export class Zad17Component implements OnInit {
  imgGallery: Galery[];
  changeBackground: any;
  changeBackground1: string[];
  index: number = 0;
  isImgClicked: boolean;
  src: string = "";

  constructor() {
    this.imgGallery = [];
    this.changeBackground1 = ["blue", "red", "green", "yellow"];
    this.isImgClicked = false;
  }

  ngOnInit(): void {
    this.imgGallery.push(
      Galery.create(
        "https://appliancecareofatlanta.com/wp-content/uploads/2021/01/176-1766224_instagram-logos-in-vector-format-free-download-instagram-logo-small-size.jpg",
        "instagram"
      ),
      Galery.create(
        "https://upload.wikimedia.org/wikipedia/commons/3/30/Bw_copy_icon_320x320.png",
        "squares"
      ),
      Galery.create(
        "https://stachura.opole.pl/images/oferta_05-320x320.jpg",
        "tower"
      ),
      Galery.create(
        "https://www.airfrance.com/FR/common/common/img/tbaf/destinations/PPT/PPT-1_1-320x320.jpg",
        "lake"
      )
    );
  }

  onAddParent(index: number, src: string) {
    this.index = index;
    this.src = src;
  }

  onNextParent() {
    this.index = this.index + 1;
    this.src = this.imgGallery[this.index].url;
  }
  onPrevParent() {
    this.index = this.index - 1;
    this.src = this.imgGallery[this.index].url;
  }
}

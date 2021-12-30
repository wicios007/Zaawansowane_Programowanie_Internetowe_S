import { Component, OnInit } from "@angular/core";
import { Image } from "./image";

@Component({
  selector: "app-zad9do11",
  templateUrl: "./zad9do11.component.html",
  styleUrls: ["./zad9do11.component.css"],
})
export class Zad9do11Component implements OnInit {
  imgTable: Image[] = [];
  selectedIndex: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.imgTable.push(
      new Image(
        "instagram",
        "https://appliancecareofatlanta.com/wp-content/uploads/2021/01/176-1766224_instagram-logos-in-vector-format-free-download-instagram-logo-small-size.jpg"
      )
    );
    this.imgTable.push(
      new Image(
        "squares",
        "https://upload.wikimedia.org/wikipedia/commons/3/30/Bw_copy_icon_320x320.png"
      )
    );
    this.imgTable.push(
      new Image(
        "tower",
        "https://stachura.opole.pl/images/oferta_05-320x320.jpg"
      )
    );
    this.imgTable.push(
      new Image(
        "lake",
        "https://www.airfrance.com/FR/common/common/img/tbaf/destinations/PPT/PPT-1_1-320x320.jpg"
      )
    );
  }
  onNext() {
    this.selectedIndex += 1;
  }
  onPrevent() {
    this.selectedIndex -= 1;
  }
}

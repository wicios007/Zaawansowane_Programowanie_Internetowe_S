import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zad5',
  templateUrl: './zad5.component.html',
  styleUrls: ['./zad5.component.css']
})
export class Zad5Component implements OnInit {

  links: any
  index : number
  constructor() {
    this.links = []
    this.index = -1
  }

  ngOnInit(): void {
    this.links = [
      { name: "PCz", url: "http://www.pcz.pl/", clicked: false },
      { name: "WIMiI", url: "http://www.wimii.pcz.pl/", clicked: false },
      { name: "Wirtualna Polska", url: "http://www.wp.pl/", clicked: false }
    ]
  }

  clickedLink(index : number) {
    this.index = index
  }

}

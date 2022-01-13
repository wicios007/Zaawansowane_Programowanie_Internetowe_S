import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-zad05',
  templateUrl: `./zad05.component.html`,
  styleUrls: [`./zad05.component.css`]
})
export class Zad05Component implements OnInit {



  siteList: any;
  selectedIndex: number;
  link: any;
  

  constructor() { 
    this.siteList = [];
    this.selectedIndex = -1;
  }

  ngOnInit(): void {
    this.siteList = [
      { name: "Google", url: "http://www.google.com", description: "Strona google", clicked: false },
      { name: "StackOverflow", url: "http://www.stackoverflow.com", clicked: false },
      { name: "Politechnika Częstochowska", url: "https://pcz.pl", clicked: false },
      { name: "PCz WIMiI", url: "https://wimii.pcz.pl", clicked: false },
      { name: "PCz e-learning", url: "https://moodle2021.pcz.pl/", clicked: false }
    ];
  }
  listItemClick(index: number){
    this.selectedIndex = index;
    this.link = this.siteList[index]
  }
  showDetails(){

  }
}

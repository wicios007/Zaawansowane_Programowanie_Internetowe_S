import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zad12c1',
  templateUrl: './zad12c1.component.html',
  styleUrls: ['./zad12c1.component.css']
})
export class Zad12c1Component implements OnInit {

  componentTwoActive: boolean;
  constructor() { 
    this.componentTwoActive = false;
  }

  ngOnInit(): void {
  }

  activateComponentTwo(){
    this.componentTwoActive = true;
  }
  hideComponent(){
    this.componentTwoActive = false;
  }
}

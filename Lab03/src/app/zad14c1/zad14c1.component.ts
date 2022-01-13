import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-zad14c1',
  templateUrl: './zad14c1.component.html',
  styleUrls: ['./zad14c1.component.css']
})
export class Zad14c1Component implements OnInit {

  componentTwoActive: boolean;
  @Input() text: string;

  constructor() { 
    this.componentTwoActive = false;
    this.text = "";
  }
  ngOnInit(): void {
  }


  activateComponentTwo(){
    this.componentTwoActive = true;
  }
  
  hideComponent(){
    this.componentTwoActive = false;
  }
  getText(event: string){
    this.text = event;
    this.hideComponent();
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-zad5-details',
  templateUrl: './zad5-details.component.html',
  styleUrls: ['./zad5-details.component.css']
})
export class Zad5DetailsComponent implements OnInit {

  @Input() linkFromParent : any
  @Input() received : any
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-details',
  templateUrl: './link-details.component.html',
  styleUrls: ['./link-details.component.css']
})
export class LinkDetailsComponent implements OnInit {

  @Input() link: any;

  constructor() { }

  ngOnInit(): void {
  }

}

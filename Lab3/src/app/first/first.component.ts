import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  p1Class: any;
  title: string = "Pierwsza_wartosc_przekazana_z_komponentu";
  text: any;
  person = {
    firstName: "Daniel",
    lastName: "Więcek"
  };
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.text = this.person.firstName + " " + this.person.lastName;
    this.p1Class = {"selected": true, "cilcked": false};
  }

}

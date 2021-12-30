import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  h1Class: any;
  headerColor: any;
  title: string = "Pierwsza_wartosc_przekazana_z_komponentu"
  person = {
    firstName: "Ernest",
    lastName: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

  method() {
    return "wartosc zwrocona z metody"
  }
  onClick() {
    this.title = "Po_kliknięciu";
    this.h1Class = "klikniety";
    this.headerColor = {"color":"yellow", "font-size.px":56}
    
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  title: string = "pierwsza wartosc przekazana z komponentu";
  student = {
    firstName: "Mateusz",
    lastName: "Malec"
  }

  constructor() { }

  ngOnInit(): void {
  }

  method() {
    return "wartosc zwrocona"
  }

  onClick() {
    
  }

}

import { Component, OnInit } from '@angular/core';
import { Zad7Service } from '../services/zad7.service';

@Component({
  selector: 'app-zad7-second',
  templateUrl: './zad7-second.component.html',
  styleUrls: ['./zad7-second.component.css']
})
export class Zad7SecondComponent implements OnInit {

  constructor(public service : Zad7Service) { }

  ngOnInit(): void {
  }


}

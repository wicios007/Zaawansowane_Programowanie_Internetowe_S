import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-zad20',
  templateUrl: './zad20.component.html',
  styleUrls: ['./zad20.component.css']
})
export class Zad20Component implements OnInit {

  public form : FormGroup
  constructor(private fb : FormBuilder) { this.form = this.fb.group({}) }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.form = this.fb.group({
      input1 : [null],
      input2 : [null]
    })
  }

  

}

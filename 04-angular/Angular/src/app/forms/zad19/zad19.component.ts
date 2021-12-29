import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-zad19',
  templateUrl: './zad19.component.html',
  styleUrls: ['./zad19.component.css']
})
export class Zad19Component implements OnInit {

  public form : FormGroup
  constructor(private fb : FormBuilder) { this.form = this.fb.group({}) }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.form = this.fb.group({
      input1 : [null]
    })
  }

}

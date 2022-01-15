import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IAuthor } from '../interfaces/IAuthor';
import { AuthorsService } from '../services/authors.service';

@Component({
  selector: 'app-authors-edit',
  templateUrl: './authors-edit.component.html',
  styleUrls: ['./authors-edit.component.css']
})
export class AuthorsEditComponent implements OnInit, OnDestroy {

  form : FormGroup
  author! : IAuthor
  constructor(private fb : FormBuilder, private authorsService : AuthorsService, private activatedRoute : ActivatedRoute) {
    this.activatedRoute.params.subscribe(res => {
      this.author = this.authorsService.authors.find(c => c.id == res.id)!
    })
    this.form = this.fb.group({})
   }

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName : [this.author.firstName, Validators.compose([Validators.required])],
      lastName : [this.author.lastName, Validators.compose([Validators.required])]
    })
  }

  ngOnSubmit(){
    this.authorsService.edit(this.author.id, this.form.value).subscribe(data => {
      console.log(data)
    })
  }

  ngOnDestroy(){
    console.log("component destroyed")
  }

}

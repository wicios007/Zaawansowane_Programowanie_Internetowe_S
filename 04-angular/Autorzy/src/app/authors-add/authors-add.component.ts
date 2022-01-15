import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAuthor } from '../interfaces/IAuthor';
import { AuthorsService } from '../services/authors.service';

@Component({
  selector: 'app-authors-add',
  templateUrl: './authors-add.component.html',
  styleUrls: ['./authors-add.component.css']
})
export class AuthorsAddComponent implements OnInit {

  form : FormGroup
  constructor(private fb : FormBuilder, private authorsService : AuthorsService) {
    this.form = this.fb.group({})
   }

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName : [null, Validators.compose([Validators.required])],
      lastName : [null, Validators.compose([Validators.required])]
    })
  }

  ngOnSubmit(){
    this.authorsService.create(this.form.value).subscribe(data => {
      console.log(data)
      const newAuthor = data as IAuthor
      this.authorsService.authors.push(newAuthor)
      this.form.reset()
      
    }, err => console.error(err))
  }

}

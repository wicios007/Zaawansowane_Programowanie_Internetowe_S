import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAuthor } from '../interfaces/IAuthor';
import { AuthorsService } from '../services/authors.service';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css']
})
export class AuthorsListComponent implements OnInit {

  authors : IAuthor[]
  constructor(private authorService : AuthorsService, private http: HttpClient, private router : Router) {
    this.authors = []
   }

  ngOnInit(): void {
    this.authorService.getAll().subscribe(data => {
      this.authors = data
      this.authorService.authors = data
      console.log(this.authors);
    }, err => console.error(err))

    // this.http.get("http://localhost:5000/Authors").subscribe(data => console.log(data))

  }

  delete(id: number){
    this.authorService.delete(id).subscribe(data => {
      console.log(data)

      const author = this.authors.find(c => c.id == id)
      this.authors.splice(this.authors.indexOf(author!), 1)
      
    }, err => {
      console.error(err)
    })
  }

  redirectTo(id : number){
    this.router.navigate(['details', id])
  }

  redirectToDelete(id : number){
    this.router.navigate(['delete', id])
  }
  redirectToEdit(id : number){
    this.router.navigate(['edit', id])
  }

}

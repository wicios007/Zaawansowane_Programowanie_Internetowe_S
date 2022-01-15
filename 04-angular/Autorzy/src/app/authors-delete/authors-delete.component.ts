import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAuthor } from '../interfaces/IAuthor';
import { AuthorsService } from '../services/authors.service';

@Component({
  selector: 'app-authors-delete',
  templateUrl: './authors-delete.component.html',
  styleUrls: ['./authors-delete.component.css']
})
export class AuthorsDeleteComponent implements OnInit {

  authorId : number
  author! : IAuthor
  constructor(private route : ActivatedRoute, private authorService : AuthorsService, private router : Router) {
    this.authorId = 0;
    
   }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.authorId = data.id;
      this.author = this.authorService.authors.find(c => c.id == data.id)!
      // this.authorService.getById(this.authorId).subscribe(data => {
      //   this.author = data
      // })
    }, err => {
      console.error(err)
    })
  }

  redirectToList(){
    this.router.navigate(['./']);
  }

  deleteAuthor(){
    const autor = this.authorService.authors.find(c => c.id == this.author.id)
    this.authorService.delete(this.author.id).subscribe(data => {
      console.log(data)
    }, err => {
      console.error(err)
    }, () => {
      this.authorService.authors.splice(this.authorService.authors.indexOf(autor!), 1)
      this.router.navigate(['./'])
    })
    
  }
}

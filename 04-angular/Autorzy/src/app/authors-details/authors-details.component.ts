import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAuthor } from '../interfaces/IAuthor';
import { AuthorsService } from '../services/authors.service';

@Component({
  selector: 'app-authors-details',
  templateUrl: './authors-details.component.html',
  styleUrls: ['./authors-details.component.css']
})
export class AuthorsDetailsComponent implements OnInit {

  authorId : number
  author! : IAuthor
  constructor(private route : ActivatedRoute, private authorService : AuthorsService) {
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

}

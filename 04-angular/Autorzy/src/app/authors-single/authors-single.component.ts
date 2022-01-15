import { Component, Input, OnInit } from '@angular/core';
import { IAuthor } from '../interfaces/IAuthor';

@Component({
  selector: 'app-authors-single',
  templateUrl: './authors-single.component.html',
  styleUrls: ['./authors-single.component.css']
})
export class AuthorsSingleComponent implements OnInit {

  @Input() authorInput! : IAuthor

  constructor() { }

  ngOnInit(): void {
  }

}

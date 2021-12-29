import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LinksService } from '../services/links.service';

@Component({
  selector: 'app-zad5-delete',
  templateUrl: './zad5-delete.component.html',
  styleUrls: ['./zad5-delete.component.css']
})
export class Zad5DeleteComponent implements OnInit {

  @Input() linkToDelete : any
  @Output() deleteLinkEmit : EventEmitter<any> = new EventEmitter<any>()
  @Output() deleteLinkBoolean : EventEmitter<boolean> = new EventEmitter<boolean>()
  constructor(private linksService : LinksService) { }


  ngOnInit(): void {
  }

  deleteAgree(){
    this.linksService.remove(this.linkToDelete)
    //this.deleteLinkEmit.emit(this.linkToDelete)
    this.deleteLinkBoolean.emit(false)
  }
  deleteDecline(){
    this.deleteLinkBoolean.emit(false)
  }
}

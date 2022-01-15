import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LinksService } from '../services/links.service';

@Component({
  selector: 'app-zad5',
  templateUrl: './zad5.component.html',
  styleUrls: ['./zad5.component.css']
})
export class Zad5Component implements OnInit {

  form : FormGroup
  formEdit : FormGroup

  index : number
  linkToEdit : any
  @Output() link : EventEmitter<any> = new EventEmitter<any>()
  @Output() sent : any

  @Input() deleteLink : any
  @Input() deleteLinkBoolean : boolean = false

  detailsShow : boolean = false
  deleteShow : boolean = false

  showHideAddButtonText : string = "Pokaż formularz do dodawania"
  showHideAddButtonBoolean : boolean = false

  showHideEditButtonText : string = "Pokaż formularz do edycji"
  showHideEditButtonBoolean : boolean = false

  constructor(private fb : FormBuilder, public linksService : LinksService) {
    this.form = this.fb.group({})
    this.formEdit = this.fb.group({})

    this.index = -1
  }

  ngOnInit(): void {

    this.initForm()
  }

  initForm(){
    this.form = this.fb.group({
      name : [null, Validators.compose([Validators.required])],
      url : [null, Validators.compose([Validators.required])],
      clicked : false,
      description : [null]
    })
  }

  initEditForm(index : number){
    this.linkToEdit = this.linksService.links[index]
    this.formEdit = this.fb.group({
      name : [this.linksService.links[index].name],
      url : [this.linksService.links[index].url],
      description : [this.linksService.links[index].description]
    })
  }

  clickedLink(index : number) {
    this.index = index
    // this.link.emit(this.linksService.links[index])
    this.sent = this.linksService.links[index]
    this.detailsShow = true
    this.deleteShow = false
  }
  deleteLinkBtn(index : number){
    this.deleteShow = true
    this.detailsShow = false
    this.sent = this.linksService.links[index]
  }

  deleteLinkReceive(evt : any){
    this.deleteLink = evt
    // const linkToRemove = this.linksService.links.find((c: { name: any; }) => c.name == evt.name)
    //this.links.splice(linkToRemove)
    // this.linksService.links = this.links.filter((c: any) => c !== linkToRemove)
    this.linksService.remove(evt)
    console.log(evt)
    this.deleteShow = false
  }
  hideDeleteComponent(evt : any){
    console.log(evt)
    this.deleteShow = evt
  }

  onSubmitAdd(){
    this.linksService.add(this.form.value)
    this.form.reset()

    Object.keys(this.form.controls).forEach(key => {
      this.form.get(key)?.setErrors(null)
    })

  }
  onSubmitEdit(){
    /*
      TODO: tę funkcję trzeba zrobić troszkę inaczej,
      bo przy próbie zmiany nazwy wysypuje błąd,
      trzeba to wyszukiwać przez id
    */

    this.linkToEdit = this.linksService.links.find((c: { name: any; }) => c.name == this.formEdit.value['name'])
    this.linkToEdit.name = this.formEdit.value['name']
    this.linkToEdit.url = this.formEdit.value['url']
    this.linkToEdit.description = this.formEdit.value['description']
    this.showHideEditButtonBoolean = false
  }

  showHideAddForm(){
    this.showHideAddButtonBoolean = !this.showHideAddButtonBoolean
    this.showHideAddButtonBoolean == true ? this.showHideAddButtonText = "Pokaż formularz do dodawania" : this.showHideAddButtonText = "Ukryj forumularz do dodawania"
  }

  editLinkBtn(index : number){
    this.showHideEditButtonBoolean = true
    this.initEditForm(index)
  }

  hideEditForm(){
    this.showHideEditButtonBoolean = false
  }

}

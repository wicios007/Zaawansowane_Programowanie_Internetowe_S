import { Injectable } from '@angular/core';
import { ILink } from '../models/ILink';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  links : ILink[]

  constructor() { 
    this.links = [
      { id: 1, name: "PCz", url: "http://www.pcz.pl/", clicked: false, description: "Strona uczelni Politechniki Częstochowskiej" },
      { id: 2, name: "WIMiI", url: "http://www.wimii.pcz.pl/", clicked: false, description: "Strona Wydziału Inżynierii Mechanicznej i Informatyki Politechniki Częstochowskiej" },
      { id: 3, name: "Wirtualna Polska", url: "http://www.wp.pl/", clicked: false, description: "Strona z informacjami z Polski i z całego świata" }
    ]
  }

  add(link : ILink){
    link.id = this.links.length + 1
    this.links.push(link)
  }
  remove(link : ILink){
    const result = this.links.find(c => c.name == link.name)
    this.links = this.links.filter((c: any) => c !== result)
  }


}

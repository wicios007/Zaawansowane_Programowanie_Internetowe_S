import { Component, OnInit } from '@angular/core';

class Image{
  public name : string
  public url : string
  public desc : string
  constructor(_name : string, _url : string, _desc : string) {
    this.name = _name
    this.url = _url    
    this.desc = _desc
  }

}

@Component({
  selector: 'app-zad9',
  templateUrl: './zad9.component.html',
  styleUrls: ['./zad9.component.css']
})
export class Zad9Component implements OnInit {

  images : Image[] = []
  selectedIndex : number = 0
  constructor() {}

  ngOnInit(): void {
    this.images.push(new Image("Niedźwiedź", "https://cdn.pixabay.com/photo/2016/08/09/07/29/bear-1580040_960_720.jpg", "Niedźwiedź w wodzie"))
    this.images.push(new Image("Opona", "https://cdn.pixabay.com/photo/2014/08/12/01/47/tire-416189_960_720.jpg", "Pęknięta opona"))
    this.images.push(new Image("Zegar", "https://cdn.pixabay.com/photo/2020/10/03/16/12/clock-5623885_960_720.jpg", "Niebieski budzik"))
    this.images.push(new Image("Podlewaczka", "https://cdn.pixabay.com/photo/2020/06/27/15/44/watering-can-5346272_960_720.jpg", "Zielona konewka"))
  }


  nextImg(){
    this.selectedIndex++
  }

  prevImg(){
    this.selectedIndex--
  }
}



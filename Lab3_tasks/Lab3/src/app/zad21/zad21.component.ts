import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-zad21",
  templateUrl: "./zad21.component.html",
  styleUrls: ["./zad21.component.css"],
})
export class Zad21Component implements OnInit {
  vals: string = "";
  @Input() lista: object[] = [{}];
  @Input() name: string = "";
  @Input() url: string = "";
  @Input() description: string = "";
  public formSubmitted: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  onInitBox1(val: string) {
    this.name = val;
  }
  onInitBox2(val: string) {
    this.url = val;
  }
  onInitBox3(val: string) {
    this.description = val;
  }
  sendData() {
    this.lista.push({
      name: this.name,
      url: this.url,
      description: this.description,
    });
    this.clear();
  }
  clear() {
    let input = <HTMLInputElement>document.getElementById("inp1");
    let input2 = <HTMLInputElement>document.getElementById("inp2");
    let input3 = <HTMLInputElement>document.getElementById("inp3");

    input.value = "";
    input2.value = "";
    input3.value = "";

    this.name = "";
    this.url = "";
    this.description = "";
  }
}

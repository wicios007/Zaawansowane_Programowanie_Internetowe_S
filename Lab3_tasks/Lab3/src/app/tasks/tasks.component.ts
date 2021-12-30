import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"],
})
export class TasksComponent implements OnInit {
  person = {
    firstName: "",
    lastName: "",
  };
  bfClass: any;
  bcClass: any;
  isBfClassShown: boolean;
  isBcClassShown: boolean;

  constructor() {
    this.isBcClassShown = false;
    this.isBfClassShown = false;
  }

  ngOnInit(): void {}
  onClick() {
    this.person.firstName = "Patryk";
    this.person.lastName = "Skwara";
    this.bfClass = "";
    this.bcClass = "";
  }
  onClickF() {
    this.isBfClassShown = !this.isBfClassShown;
    this.bfClass = this.isBfClassShown ? { "font-size.px": 12 } : "";
    this.bcClass = "";
  }
  onClickC() {
    this.isBcClassShown = !this.isBcClassShown;
    this.bcClass = this.isBcClassShown
      ? { color: "green", "text-decoration": "line-through" }
      : "";
    this.bfClass = "";
  }
}

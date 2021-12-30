import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-input-ex-parent",
  templateUrl: "./input-ex-parent.component.html",
  styleUrls: ["./input-ex-parent.component.css"],
})
export class InputExParentComponent implements OnInit {
  currentItem = "Television";

  items = ["item1", "item2", "item3", "item4"];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
  constructor() {}

  ngOnInit(): void {}
}

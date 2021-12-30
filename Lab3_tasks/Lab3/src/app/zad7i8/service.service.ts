import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ServiceService {
  counter: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  // counter$: Observable<number>;

  constructor() {
    // this.counter$ = this.counterOnChange.asObservable();
  }

  modifyStateCounter(val: number) {
    this.counter.next(this.counter.value + val);
  }
}

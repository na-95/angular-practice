import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  sharedProp: BehaviorSubject<string>;

  constructor() {

    this.sharedProp = new BehaviorSubject('Initial Value')

  }

  updateProp = (val) => {

    this.sharedProp.next(val);

  }
}

import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-two-way-binding-child',
  templateUrl: './two-way-binding-child.component.html',
  styleUrls: ['./two-way-binding-child.component.css']
})
export class TwoWayBindingChildComponent implements OnInit, OnChanges {
  @Input() childProp: any;

  constructor() { }

  ngOnInit(): void {
    console.log('child was init')
  }

  ngOnChanges() {
    console.log('new input prop recieved in child');

  }

}

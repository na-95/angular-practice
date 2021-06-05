import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  parentProp: any = 1;

  constructor(private cdr: ChangeDetectorRef, private zone: NgZone) { }

  ngOnInit(): void {

  }

  triggerPropUpdate = (emittedValue) => {
    
    this.parentProp = emittedValue;
    
  }

}

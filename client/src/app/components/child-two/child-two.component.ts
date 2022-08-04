import { ChangeDetectorRef, Component, OnChanges, OnInit } from '@angular/core';
import { TestServiceService } from 'src/app/services/test-service.service';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit, OnChanges {
  someData: string = ''

  constructor(private testService: TestServiceService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    console.log(this.someData, '<<<<')
    // this.testService.sharedProp.subscribe(h => {
    //   this.someData = h;
    // })
    console.log(this.someData, '<<<<')
    // setTimeout(() => { this.someData = 'fuaaaaark' }, 1000)
  }

  ngOnChanges(): void {
    console.log('fuck, child two was re rendered')
  }

}

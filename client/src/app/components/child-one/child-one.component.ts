import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TestServiceService } from 'src/app/services/test-service.service';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit, OnChanges {

  @Input() leMessage: string = 'B****';
  @Input() alMessage: string;

  constructor(private testService: TestServiceService) {
    console.log(this.leMessage, 'inside constructor')

  }

  ngOnChanges(changes: SimpleChanges) {
    // ngOnChanges is called before ngOnInit to ensure that the latter function has access to the data bounded to the input props when it is called. if the initialized value (Bitch in this case) is required, use constructor.
    console.log(changes.leMessage, 'inside onChanges')
  }

  ngOnInit(): void {
    console.log(this.leMessage, 'inside onInit')
  }

  onSubmit = (e) => {
    console.log(e.target.value)
    this.testService.updateProp(e.target.value);
  }

}

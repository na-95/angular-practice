import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TestServiceService } from 'src/app/services/test-service.service';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit, OnChanges {

  @Input() leMessage: string = 'Bitch';

  constructor(private testService: TestServiceService) {
    console.log(this.leMessage, 'constructor')

  }

  ngOnInit(): void {
    console.log(this.leMessage, 'init')
  }

  ngOnChanges(changes: SimpleChanges) {
    // ngOnChanges is called before ngOnInit to ensure that the later function has access to the data bounded to the input props when it is called. if the initialized value (Bitch in this case) is required, use constructor.
    console.log(changes.leMessage, 'onChanges')
  }

  onSubmit = (e) => {
    console.log(e.target.value)
    this.testService.updateProp(e.target.value);
  }

}

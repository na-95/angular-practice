import { Component, OnInit } from '@angular/core';
import { TestServiceService } from 'src/app/services/test-service.service';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {

  constructor(private testService: TestServiceService) { }

  ngOnInit(): void {
  }

  onSubmit = (e) => {
    console.log(e.target.value)
    this.testService.updateProp(e.target.value);
  }

}

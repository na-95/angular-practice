import { Component, OnInit } from '@angular/core';
import { TestServiceService } from 'src/app/services/test-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerContent: string;

  constructor(public testService: TestServiceService) { }

  ngOnInit(): void {
    this.testService.sharedProp.subscribe(
      h => {
        this.headerContent = h;
      }
    );
  }
}

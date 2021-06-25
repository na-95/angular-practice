import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  showChildTwo: boolean = false;
  leMessage: string = 'fuck';

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showChildTwo = true;
    }, 5000)
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  showChildTwo: boolean = false;
  leMessage: Array<string> = ['Nouraiz']

  constructor() { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.showChildTwo = true;
    // }, 5000)

    setTimeout(() => {
      // this.leMessage.push('asdjkhasjkdh');
      this.leMessage = [...this.leMessage, "asjdklasjdlkaj"]
    }, 5000);
  }

}

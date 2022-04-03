import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fluid-tabs',
  templateUrl: './fluid-tabs.component.html',
  styleUrls: ['./fluid-tabs.component.css']
})
export class FluidTabsComponent implements OnInit {

  active: string = "a";

  constructor() { }

  ngOnInit(): void {
  }

  setActive(active){
    this.active = active;
  }

}

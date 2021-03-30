import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerContent: string;

  constructor() { }

  ngOnInit(): void {
    this.headerContent = `Nouraiz's Todo App (in Angular!)`
  }

}

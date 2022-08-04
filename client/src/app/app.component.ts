import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bitch Lasagna';
  name:string;

  constructor () {
    this.setName('Nouraiz')
  }

  setName = (newName:string) => {
      this.name = newName;
      console.log('name updated', this.name);
  }

}

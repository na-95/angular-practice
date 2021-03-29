import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];

  constructor() {
    this.todos = [
      {
        id: 1,
        title: 'task 1',
        completed: false
      },
      {
        id: 2,
        title: 'task 2',
        completed: false
      },
      {
        id: 3,
        title: 'task 3',
        completed: false
      },
    ]
  }

  ngOnInit(): void {
    console.log('todos component rendered')
  }

}

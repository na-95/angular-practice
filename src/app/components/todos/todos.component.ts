import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  responseCount: number = 0;

  // instance of the service as param:
  constructor(private todoService: TodoService) {

  }

  ngOnInit(): void {
    // getTodos() method of the imported service:
    this.todoService.getTodos()
      .subscribe(res => {
        this.todos = [...res]
        console.log(res, ' response bitches')
      })

    // console.log('todos component rendered');

    setTimeout(this.refresh, 5000);

  }

  deleteTodo = (todo: Todo) => {
    this.todos = this.todos.filter(i => (i !== todo));
  }

  addTodo = (todo: Todo) => {
    this.todos.push(todo);
  }

  refresh = () => {
    // make Ajax call here, inside the callback call:
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {

        this.responseCount = this.responseCount + 1;
        // if condition met
        if (this.responseCount === 3){
          return;
        }
        // return;

        // else
        setTimeout(this.refresh, 5000);
        console.log(json);
      })

    
    // ...
  }

}

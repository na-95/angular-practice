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
  }

  deleteTodo = (todo: Todo) => {
    this.todos = this.todos.filter(i => (i !== todo));
  }

  addTodo = (todo: Todo) => {
    this.todos.push(todo);
  }

}

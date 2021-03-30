import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo = new EventEmitter<Todo>();

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  onToggle = (todo) => {
    // console.log('selected todo item:', todo)
    this.todoService.toggleCompleted(todo)
      .subscribe(res => {
        console.log(res)
      })
  }

  onDelete = (todo) => {
    console.log('selected todo item:', todo)
  }

}

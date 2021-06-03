import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  baseUrl: string = "https://jsonplaceholder.typicode.com/todos";
  todosLimit: number = 9;

  constructor(private http: HttpClient) { }

  getTodos = (): Observable<Todo[]> => {
    let { http } = this;
    return http.get<Todo[]>(`${this.baseUrl}?_limit=${this.todosLimit}`)
  }

  toggleCompleted = (todo: Todo): Observable<any> => {
    todo.completed = !todo.completed;

    let { http } = this;
    return http.put(`${this.baseUrl}/${todo.id}`, todo, httpOptions)
  }
}

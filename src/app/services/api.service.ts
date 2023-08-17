import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:8000';
  constructor(private httpService: HttpClient) { }
  addTodo(todo: Todo) {
    return this.httpService.post<Todo>(`${this.baseUrl}/todos`, todo);
  }
  getTodos() {
    return this.httpService.get<Todo[]>(`${this.baseUrl}/todos`);
  }

  deleteTodo(todoId: string) {
    return this.httpService.delete(`${this.baseUrl}/todos/${todoId}`)
  }

  getTodo(todoId: string) {
    return this.httpService.get<Todo>(`${this.baseUrl}/todos/${todoId}`)
  }

  updateTodo(todoId: string, todo: Todo) {
    return this.httpService.put<Todo>(`${this.baseUrl}/todos/${todoId}`, todo)
  }
}

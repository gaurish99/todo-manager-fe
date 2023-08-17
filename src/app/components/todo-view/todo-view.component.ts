import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TodoViewComponent {
  @Input() todo: Todo = new Todo

  @Output() deleteEvent: EventEmitter<string> = new EventEmitter()

  constructor(private apiService: ApiService) {

  }

  deleteTodo(todoId: string) {

    this.apiService.deleteTodo(todoId).subscribe({
      next: (data) => {
        this.deleteEvent.next(todoId)
        console.log(data)
        alert("todo deleted")
      },
      error: (error) => {
        alert("todo error")
        console.log(error);

      },
      complete: () => {
        console.log("Request Completed");

      }
    })

  }

}

import { Component } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  todo = new Todo();

  constructor(private apiService: ApiService) {

  }
  submitForm(event: SubmitEvent) {
    event.preventDefault();
    console.log(event);
    console.log(this.todo);

    this.apiService.addTodo(this.todo).subscribe({
      next: (data) => {
        console.log(data);
        alert("Todo added")
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log("request completed");
      }
    })

    this.todo = new Todo
  }
}
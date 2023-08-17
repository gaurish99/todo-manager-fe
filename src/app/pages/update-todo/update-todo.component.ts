import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Todo } from 'src/app/model/todo';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit {

  todo = new Todo();

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute,private router:Router) {

  }
  ngOnInit(): void {

    const todoId = this.activatedRoute.snapshot.paramMap.get("todoId")
    this.apiService.getTodo(todoId || '').subscribe({
      next: (data) => {
        console.log(data)
        this.todo = data
      },
      error: (error) => {
        console.log(error)

      },
      complete: () => {
        console.log("request is complete");

      }
    })
  }

  updateTodo(event: SubmitEvent) {
    event.preventDefault()
    console.log(this.todo.id);

    this.apiService.updateTodo(this.todo.id, this.todo).subscribe({
      next: (data) => {
        console.log(data);

      },
      error: (error) => {
        console.log(error);

      },
      complete: () => {
        console.log("Update Request Completed");

        this.router.navigate(['view-todos'])

      }
    })


  }

}

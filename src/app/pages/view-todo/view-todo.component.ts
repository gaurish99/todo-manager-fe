import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-todo',
  templateUrl: './view-todo.component.html',
  styleUrls: ['./view-todo.component.css']
})
export class ViewTodoComponent implements OnInit {

  todos:Todo[]=[]

  constructor(private apiService:ApiService)
  {

  }
  ngOnInit(): void {
    this.apiService.getTodos().subscribe({
      next: (data)=>{
        console.log(data);
        this.todos=data
      } ,
      error:(error)=>{
        console.log(error);
        
      },
      complete:()=>{
        console.log("Request is Completed");
        
      }
    })
  }


  deleteEventOfChild(todoId:string)
  {
    alert('todoId'+todoId)

    this.todos=this.todos.filter(todo=>todo.id!=todoId)

  }

}

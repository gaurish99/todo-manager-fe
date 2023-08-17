import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddTodoComponent } from './pages/add-todo/add-todo.component';
import { UpdateTodoComponent } from './pages/update-todo/update-todo.component';
import { ViewTodoComponent } from './pages/view-todo/view-todo.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    title: "Home Page for TODO Manager"
  },
  {
    path: 'add-todo',
    component: AddTodoComponent
  },
  {
    path: 'update-todo/:todoId',
    component: UpdateTodoComponent
  },
  {
    path: 'view-todos',
    component: ViewTodoComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

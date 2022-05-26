import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TodoComponent } from './todo/todo.component';
import { UserTodoComponent } from './user-todo/user-todo.component';

const routes: Routes = [
  {path: "", redirectTo:"/home", pathMatch:"full"},
  {path: "home", component:HomeComponent},
  {path: "sign-up", component:SignUpComponent},
  {path: "sign-in", component:SignInComponent},
  {path: "todo", children:[
    {path: "",  component:TodoComponent},
    {path: "user-todo/:id", component:UserTodoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

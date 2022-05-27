import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public users:any = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    userTodo: []
  };
  public cPass:string = "";
  public myDatas: any = JSON.parse(localStorage.getItem("usersData")!);
  public allUsers:any = [];
  public errormsg: string = "";
  public emailReg:any = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  constructor(public router: Router) { }

  ngOnInit(): void {
    this.myDatas = JSON.parse(localStorage.getItem("usersData")!);
  }
  signUp () {
    let regTest = this.emailReg.test(this.users.email)
    console.log(regTest, this.users.email);

    let { firstname, lastname, email, password} = this.users
    if (firstname && lastname && email && password && this.cPass) {
      if (password != this.cPass) {
        this.errormsg = "Password does not match";
        return
      }
      if (regTest == false) {
        this.errormsg = "Please check your Email for corrections";
        return
      }
      this.allUsers = localStorage["usersData"] ? this.myDatas : []
      this.allUsers.push(this.users)
      localStorage.setItem("usersData", JSON.stringify(this.allUsers))
      this.errormsg = ""
      this.users.firstname = "";
      this.users.lastname = "";
      this.users.email = "";
      this.users.password = "";
      this.cPass = "";
      this.router.navigate(["/sign-in"])
    }
    else{
      this.errormsg = "Hi! Please fill up the blank spaces";
    }
  }
}

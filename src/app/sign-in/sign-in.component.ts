import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public user:any = {
    email: "",
    password: "",
  }
  public myDatas: any = JSON.parse(localStorage.getItem("usersData")!);
  public errormsg: string = "";
  constructor(public router: Router) { }

  ngOnInit(): void {
    this.myDatas = JSON.parse(localStorage.getItem("usersData")!);
  }
  signIn () {
    let {email, password} = this.user;
    if (email && password) {
      let findUser = this.myDatas.find((val:any) => val.email == email && val.password == password)
      if (findUser) {
        alert(`welcome ${findUser.firstname} ${findUser.lastname}`)
      }
      this.errormsg = ""
      this.user.email = "";
      this.user.password = "";
      localStorage.setItem("CurrentUser", JSON.stringify(findUser))
      this.router.navigate(["/todo"]);
    }
    else{
      this.errormsg = "Incorrect email or password"
    }
  }
}

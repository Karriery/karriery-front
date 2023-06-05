import { Component } from "@angular/core";
import { AuthService } from "src/app/auth.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-create-user-card-user1",
  templateUrl: "./create-user-card-user1.component.html",
  styleUrls: ["./create-user-card-user1.component.scss"],
})
export class CreateUserCardUser1Component {

  user : any 
  constructor(private auth : AuthService , private router : Router){}
  ngOnInit(){
    this.auth.verify().subscribe(
      data => {
        console.log(data)
        this.user = data
      },
      err => {
        localStorage.clear()
        this.router.navigateByUrl('/')
      }
    );;
  }
}


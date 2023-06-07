import { Component } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-create-user-success",
  templateUrl: "./create-user-success.component.html",
  styleUrls: ["./create-user-success.component.scss"],
})
export class CreateUserSuccessComponent {
  constructor(private router : Router){

  }
  move(){
    this.router.navigateByUrl("/userProfil/userDashbord")
  }
}

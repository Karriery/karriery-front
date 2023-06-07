import { Component } from "@angular/core";
import { AuthService } from "src/app/auth.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-create-user-caree-information",
  templateUrl: "./create-user-caree-information.component.html",
  styleUrls: ["./create-user-caree-information.component.scss"],
})
export class CreateUserCareeInformationComponent {
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
  update(data : any ){
    this.auth.updateUser(data , this.user._id).subscribe((data)=>{
      console.log(data)
       this.router.navigateByUrl("/createUser/ConfirmationPack")
    })
  }
}

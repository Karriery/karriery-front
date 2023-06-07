import { Component } from "@angular/core";
import { AuthService } from "src/app/auth.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-user-profil",
  templateUrl: "./user-profil.component.html",
  styleUrls: ["./user-profil.component.scss"],
})
export class UserProfilComponent {
  constructor(private auth : AuthService , private router : Router){}
  user : any 
  path : any 
  ngOnInit(){
     this.path = window.location.pathname
    this.auth.verify().subscribe((data)=>{
      this.user = data 
    })
  }
  move(to : any){
  this.router.navigateByUrl(to).then(()=>{
    this.path = window.location.pathname

  })
  } 
  disconnect(){
    localStorage.clear()
    this.router.navigateByUrl("/")
  }
}

import { Component } from "@angular/core";
import { AuthService } from "src/app/auth.service";

@Component({
  selector: "app-user-profil",
  templateUrl: "./user-profil.component.html",
  styleUrls: ["./user-profil.component.scss"],
})
export class UserProfilComponent {
  constructor(private auth : AuthService){}
  user : any 
  ngOnInit(){
    this.auth.verify().subscribe((data)=>{
      this.user = data 
    })
  }
}

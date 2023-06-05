import { Component } from "@angular/core";
import { AuthService } from "src/app/auth.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-card-profil-red",
  templateUrl: "./card-profil-red.component.html",
  styleUrls: ["./card-profil-red.component.scss"],
})
export class CardProfilRedComponent {  
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


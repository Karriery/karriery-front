import { Component } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from "src/app/auth.service";

@Component({
  selector: "app-create-user-card-user2",
  templateUrl: "./create-user-card-user2.component.html",
  styleUrls: ["./create-user-card-user2.component.scss"],
})
export class CreateUserCardUser2Component {
  list: any = [
    {
      img: "./../../../assets/Mask.png",
      num: "99 750 415",
      post: "UI/UX Designer",
      pack: "EVOLUTION",
      email: "saif.abid@gmail.com",
    },
  ];
  constructor(private auth : AuthService , private router : Router){}
  user : any
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
    );
  }
  
}

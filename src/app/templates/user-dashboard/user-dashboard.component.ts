import { Component } from "@angular/core";
import { AuthService } from "src/app/auth.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-user-dashboard",
  templateUrl: "./user-dashboard.component.html",
  styleUrls: ["./user-dashboard.component.scss"],
})
export class UserDashboardComponent {
  user: any;
  constructor(private auth: AuthService , private router : Router) {}
  ngOnInit() {
    this.auth.verify().subscribe((data) => {
      console.log(data);
      this.user = data;
    });
  }
  pofile(){
    this.router.navigateByUrl("/userProfil/infoPerso")
  }
}

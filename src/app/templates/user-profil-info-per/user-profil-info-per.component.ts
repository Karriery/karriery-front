import { Component } from "@angular/core";
import { AuthService } from "src/app/auth.service";
@Component({
  selector: "app-user-profil-info-per",
  templateUrl: "./user-profil-info-per.component.html",
  styleUrls: ["./user-profil-info-per.component.scss"],
})
export class UserProfilInfoPerComponent {
  user: any;
  constructor(private auth: AuthService) {}
  ngOnInit() {
    this.auth.verify().subscribe((data) => {
      console.log(data);
      this.user = data;
    });
  }
}

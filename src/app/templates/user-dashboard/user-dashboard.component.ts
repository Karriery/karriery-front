import { Component } from "@angular/core";
import { AuthService } from "src/app/auth.service";
@Component({
  selector: "app-user-dashboard",
  templateUrl: "./user-dashboard.component.html",
  styleUrls: ["./user-dashboard.component.scss"],
})
export class UserDashboardComponent {
  user: any;
  constructor(private auth: AuthService) {}
  ngOnInit() {
    this.auth.verify().subscribe((data) => {
      console.log(data);
      this.user = data;
    });
  }
}

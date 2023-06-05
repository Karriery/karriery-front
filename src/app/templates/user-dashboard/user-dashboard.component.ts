import { Component } from "@angular/core";

@Component({
  selector: "app-user-dashboard",
  templateUrl: "./user-dashboard.component.html",
  styleUrls: ["./user-dashboard.component.scss"],
})
export class UserDashboardComponent {
  list: any = [
    {
      img: "./../../../assets/Mask.png",
      nom: "Saif",
      prenom: "Abid",
      email: "saif.abid@gmail.com",
      password: " ****** ",
    },
  ];
}

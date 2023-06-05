import { Component } from "@angular/core";

@Component({
  selector: "app-user-profil-info-per",
  templateUrl: "./user-profil-info-per.component.html",
  styleUrls: ["./user-profil-info-per.component.scss"],
})
export class UserProfilInfoPerComponent {
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

import { Component } from "@angular/core";

@Component({
  selector: "app-create-user-card-user1",
  templateUrl: "./create-user-card-user1.component.html",
  styleUrls: ["./create-user-card-user1.component.scss"],
})
export class CreateUserCardUser1Component {
  list: any = [
    {
      img: "./../../../assets/Mask.png",
      nom: "Saif",
      prenom: "Abid",
      email: "saif.abid@gmail.com",
      password: " ******** ",
    },
  ];
}

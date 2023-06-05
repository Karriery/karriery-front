import { Component } from "@angular/core";

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
}

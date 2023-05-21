import { Component, Input } from "@angular/core";

@Component({
  selector: "app-create-user",
  templateUrl: "./create-user.component.html",
  styleUrls: ["./create-user.component.scss"],
})
export class CreateUserComponent {
  Number: number = 0;

  selectNumber(selectedNumber: number) {
    this.Number = selectedNumber;
  }
}

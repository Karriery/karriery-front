import { Component } from "@angular/core";

@Component({
  selector: "app-card-karriery",
  templateUrl: "./card-karriery.component.html",
  styleUrls: ["./card-karriery.component.scss"],
})
export class CardKarrieryComponent {
  list: any = [
    {
      num: "517",
      pack: "Evolution pack",
      prix: "99 DT",
      Total: "89 DT",
      reduction: "-10 DT",
      SousTotal: "99 DT",
    },
  ];
}

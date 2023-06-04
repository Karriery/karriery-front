import { Component } from "@angular/core";

@Component({
  selector: "app-steps",
  templateUrl: "./steps.component.html",
  styleUrls: ["./steps.component.scss"],
})
export class StepsComponent {
  list: any = [
    {
      srcImg: "./../../../assets/check.gif",
      paragraph: "Choisissez votre pack",
    },
    { srcImg: "../../assets/card.gif", paragraph: "Payez en toute sécurité" },
    {
      srcImg: "../../assets/callendar.gif",
      paragraph: "Planifiez une session de call vidéo avec un expert",
    },
    {
      srcImg: "../../assets/success.gif",
      paragraph: "Améliorez votre expérience professionnelle",
    },
  ];
}

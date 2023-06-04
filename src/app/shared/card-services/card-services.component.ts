import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";

@Component({
  selector: "app-card-services",
  templateUrl: "./card-services.component.html",
  styleUrls: ["./card-services.component.scss"],
  animations: [
    trigger("cardAnimation1", [
      transition(":enter", [
        style({ transform: "translateX(-40%)" }),
        animate("500ms", style({ transform: "translateX(0)" })),
      ]),
    ]),
    trigger("cardAnimation2", [
      transition(":enter", [
        style({ transform: "translateX(40%)" }),
        animate("500ms", style({ transform: "translateX(0)" })),
      ]),
    ]),
    trigger("cardAnimation3", [
      transition(":enter", [
        style({ transform: "translateX(-40%)" }),
        animate("500ms", style({ transform: "translateX(0)" })),
      ]),
    ]),
    trigger("cardAnimation4", [
      transition(":enter", [
        style({ transform: "translateX(40%)" }),
        animate("500ms", style({ transform: "translateX(0)" })),
      ]),
    ]),
  ],
})
export class CardServicesComponent {}

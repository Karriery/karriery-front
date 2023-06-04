import { Component } from "@angular/core";

import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";
import { Router } from "@angular/router";
@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.scss"],
  animations: [
    trigger("cardAnimation", [
      transition(":enter", [
        style({ transform: "translateX(-100%)" }),
        animate("500ms", style({ transform: "translateX(0)" })),
      ]),
    ]),
  ],
})
export class ServicesComponent {
  constructor(private router: Router) {}
  toPacks() {
    this.router.navigateByUrl("/");

    document.getElementById("Packs")!.scrollIntoView({ behavior: "smooth" });
  }
}

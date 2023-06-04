import { Component } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  animations: [
    trigger("cardAnimation", [
      transition(":enter", [
        style({ transform: "translateX(100%)" }),
        animate("800ms", style({ transform: "translateX(0)" })),
      ]),
    ]),

    trigger("cardAnimation1", [
      transition(":enter", [
        style({ transform: "translateX(-100%)" }),
        animate("800ms", style({ transform: "translateX(0)" })),
      ]),
    ]),
  ],
})
export class HeaderComponent {
  action() {
    document.getElementById("Packs")!.scrollIntoView({ behavior: "smooth" });
  }
}

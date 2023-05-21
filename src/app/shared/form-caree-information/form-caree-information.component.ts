import { Component, ViewChild, ElementRef } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-form-caree-information",
  templateUrl: "./form-caree-information.component.html",
  styleUrls: ["./form-caree-information.component.css"],
})
export class FormCareeInformationComponent {
  @ViewChild("myInput") myInput!: ElementRef;
  constructor(private router: Router) {}
  suivant(): void {
    this.router.navigate(["/createUser/pay"]);
  }
}

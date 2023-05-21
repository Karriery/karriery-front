import { Router } from "@angular/router";
import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-form-personal-information",
  templateUrl: "./form-personal-information.component.html",
  styleUrls: ["./form-personal-information.component.css"],
})
export class FormPersonalInformationComponent {
  @ViewChild("myInput") myInput!: ElementRef;
  constructor(private router: Router) {}
  suivant(): void {
    this.router.navigate(["/createUser/Caree"]);
  }
}

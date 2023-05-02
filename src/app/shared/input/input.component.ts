import { Component, Input } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
})
export class InputComponent {
  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email,
  ]);
  @Input() type!: string;
  @Input() name!: string;
  @Input() text!: string;
  @Input() value!: string;
  @Input() placeholder!: string;
}

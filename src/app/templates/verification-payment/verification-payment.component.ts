import { Component } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-verification-payment",
  templateUrl: "./verification-payment.component.html",
  styleUrls: ["./verification-payment.component.scss"],
})
export class VerificationPaymentComponent {
  constructor(private router : Router){}
  ngOnInit(){
    setTimeout(()=>{
      this.router.navigateByUrl("/createUser/Success")
    } , 3000)
  }
}

import { Component } from "@angular/core";
import { PacksService } from "src/app/serveces/packs.service";
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from "src/app/auth.service";
import { ReservationService } from "src/app/serveces/reservation.service";
@Component({
  selector: "app-create-user-choice-payment",
  templateUrl: "./create-user-choice-payment.component.html",
  styleUrls: ["./create-user-choice-payment.component.scss"],
})
export class CreateUserChoicePaymentComponent {
  constructor(private packs : PacksService ,private rs : ReservationService ,  private router : Router,private route: ActivatedRoute , private auth : AuthService){}
  pack : any 
  user : any 
  ngOnInit(){
    this.route.queryParams.subscribe((queryParams: any) => {
    this.packs.getById(queryParams.id).subscribe((data : any)=>{
      this.pack = data
    })
     })
     this.auth.verify().subscribe((data)=>{
      this.user = data
     })
    //  var obj = {
    //   packId: this.packId , 
    //   status: "0",
    //   resume: url,
    //   field: data.field,  
  }
  createReservation(){
    var obj = {
      userId : this.user._id,
      packId: this.pack._id,
      status: "2",
      resume: "https://firebasestorage.googleapis.com/v0/b/carriery-storage.appspot.com/o/resumes%2FuserEmail%2F1678657762529?alt=media&token=381a731c-d7e3-4d48-ba91-6e43e5e2a711",
      field: this.user.field,
    }
    this.rs.createReservation(obj).subscribe((data)=>{
        this.router.navigateByUrl("/createUser/PaymentCash")
    })
  }
  payOnline() {
    this.rs
      .konnect(this.pack._id, {
        packId : { price : this.pack.price}
      })
      .subscribe((data: any) => {
        window.open(data.payUrl, '_blank');
      });
  }
}

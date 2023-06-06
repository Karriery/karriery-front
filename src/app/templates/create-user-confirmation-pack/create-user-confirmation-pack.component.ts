import { Component } from "@angular/core";
import { PacksService } from "src/app/serveces/packs.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-create-user-confirmation-pack",
  templateUrl: "./create-user-confirmation-pack.component.html",
  styleUrls: ["./create-user-confirmation-pack.component.scss"],
})
export class CreateUserConfirmationPackComponent {
  constructor(private packs : PacksService , private router : Router){}
  packsList :any 
  ngOnInit(){
    this.packs.getAll().subscribe((data)=>{
      console.log(data)
      this.packsList = data 
    })
  }


  startOrder(id:string){
    this.router.navigate(["/createUser/ChoicePayment"], { queryParams: { id } });
  }
}

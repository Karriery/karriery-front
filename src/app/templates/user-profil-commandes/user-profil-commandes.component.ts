import { Component } from '@angular/core';
import { ReservationService } from 'src/app/serveces/reservation.service';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-user-profil-commandes',
  templateUrl: './user-profil-commandes.component.html',
  styleUrls: ['./user-profil-commandes.component.scss']
})
export class UserProfilCommandesComponent {
   constructor(private auth : AuthService , private rs : ReservationService){

   }
   ngOnInit(){
    this.auth.verify().subscribe((user : any)=>{
      console.log("dzaklazdklazdkl" , user)
          //  this.rs.getMyRequests(user._id).subscribe((data)=>{
          //   console.log("dazazzdaazd" , data)

          //  } , (err)=>{
          //   console.log(err)
          //  })
    })
   }
}

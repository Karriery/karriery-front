import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-coach-profil',
  templateUrl: './coach-profil.component.html',
  styleUrls: ['./coach-profil.component.css']
})
export class CoachProfilComponent {
  constructor(private auth : AuthService , private router : Router){}
  user : any 
  path : any 
  ngOnInit(){
     this.path = window.location.pathname
    this.auth.verify().subscribe((data)=>{
      this.user = data 
    })
  }
  move(to : any){
  this.router.navigateByUrl(to).then(()=>{
    this.path = window.location.pathname

  })
  } 
  disconnect(){
    localStorage.clear()
    this.router.navigateByUrl("/")
  }
}

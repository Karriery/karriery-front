import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  constructor(private router : Router){
    
  }
  toPacks() {
    this.router.navigateByUrl("/")
 
     document.getElementById('Packs')!.scrollIntoView({ behavior: 'smooth' });
   }
}

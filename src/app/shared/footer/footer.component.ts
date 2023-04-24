import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewsLetterService } from 'src/app/serveces/news-letter.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor(private router :Router , private newsLetter : NewsLetterService){}
  create(email : string){
    this.newsLetter.create(email).subscribe((res)=>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Vous êtes abonné avec succès',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }
  toApropos() {
    this.router.navigateByUrl("/")
 
     document.getElementById('about')!.scrollIntoView({ behavior: 'smooth' });
   }
   toPacks() {
    this.router.navigateByUrl("/")
 
     document.getElementById('Packs')!.scrollIntoView({ behavior: 'smooth' });
   }
   toTemoignage() {
    this.router.navigateByUrl("/readme")
   }
   toContact() {
    this.router.navigateByUrl("/")
     document.getElementById('contact')!.scrollIntoView({ behavior: 'smooth' });
   }
   toHeader() {
    this.router.navigateByUrl("/")
 
     document.getElementById('header')!.scrollIntoView({ behavior: 'smooth' });
   }
}

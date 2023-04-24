import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  i: number = 0;
  dispaly: boolean = true;
  ngOnInit(): void {}
  move(to: any) {
    this.router.navigateByUrl(to);
  }
  toggle() {
    const nav = document.getElementsByClassName('divbar')[0] as
      | HTMLElement
      | '';
    if (this.i % 2 === 0) {
      document.getElementsByClassName('divbar')[0].classList.add('dropdown');
    } else {
      document.getElementsByClassName('divbar')[0].classList.remove('dropdown');
    }
    this.i++;
  }
  scrollFunction() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document
        .getElementsByClassName('navbar-container')[0]
        .classList.add('scrolled');
    } else {
      document
        .getElementsByClassName('navbar-container')[0]
        .classList.remove('scrolled');
    }
  }
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    this.scrollFunction();
  }
  toApropos() {
   this.router.navigateByUrl("/")

    document.getElementById('about')!.scrollIntoView({ behavior: 'smooth' });
  }
  toHeader() {
    this.router.navigateByUrl("/")
 
     document.getElementById('header')!.scrollIntoView({ behavior: 'smooth' });
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
}

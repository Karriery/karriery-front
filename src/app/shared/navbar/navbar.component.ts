import { Component, HostListener, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { DialogComponent } from "src/app/templates/dialog/dialog.component";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
  animations: [
    trigger("cardAnimation", [
      transition(":enter", [
        style({ transform: "translateY(-100%)" }),
        animate("600ms", style({ transform: "translateY(0)" })),
      ]),
    ]),
  ],
})
export class NavbarComponent implements OnInit {

  loggedin = false;
  username = ""
  ////////////////////////////////////////////////////////////////////////////////////
  constructor(private router: Router, public dialog: MatDialog) {}
  login() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { use: "login" },
    });
  }
  ////////////////////////////////////////////////////////////////////////////////////
  i: number = 0;
  dispaly: boolean = true;
  ngOnInit(): void {
    this.loggedin = localStorage.getItem('token') != null
    if ( localStorage.getItem('user') != null ) {
      const user = JSON.parse(localStorage.getItem('user') || '')
      this.username = user.lastname;
    }
  }
  move(to: any) {
    this.router.navigateByUrl(to);
  }
  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    window.location.reload();
  }
  toggle() {
    const nav = document.getElementsByClassName("divbar")[0] as
      | HTMLElement
      | "";
    if (this.i % 2 === 0) {
      document.getElementsByClassName("divbar")[0].classList.add("dropdown");
    } else {
      document.getElementsByClassName("divbar")[0].classList.remove("dropdown");
    }
    this.i++;
  }
  scrollFunction() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document
        .getElementsByClassName("navbar-container")[0]
        .classList.add("scrolled");
    } else {
      document
        .getElementsByClassName("navbar-container")[0]
        .classList.remove("scrolled");
    }
  }
  @HostListener("window:scroll", ["$event"]) // for window scroll events
  onScroll(event: any) {
    this.scrollFunction();
  }
  toApropos() {
    this.router.navigateByUrl("/");

    document.getElementById("about")!.scrollIntoView({ behavior: "smooth" });
  }
  toHeader() {
    this.router.navigateByUrl("/");

    document.getElementById("header")!.scrollIntoView({ behavior: "smooth" });
  }
  toPacks() {
    this.router.navigateByUrl("/");

    document.getElementById("Packs")!.scrollIntoView({ behavior: "smooth" });
  }
  toTemoignage() {
    this.router.navigateByUrl("/readme");
  }
  toContact() {
    this.router.navigateByUrl("/");
    document.getElementById("contact")!.scrollIntoView({ behavior: "smooth" });
  }
}

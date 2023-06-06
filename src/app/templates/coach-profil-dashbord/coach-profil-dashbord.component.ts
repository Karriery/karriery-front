import { Component } from '@angular/core';
import { AuthService } from "src/app/auth.service";
@Component({
  selector: 'app-coach-profil-dashbord',
  templateUrl: './coach-profil-dashbord.component.html',
  styleUrls: ['./coach-profil-dashbord.component.scss']
})
export class CoachProfilDashbordComponent {
  user: any;
  constructor(private auth: AuthService) {}
  ngOnInit() {
    this.auth.verify().subscribe((data) => {
      console.log(data);
      this.user = data;
    });
  }

}

import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-coach-profil-info-per',
  templateUrl: './coach-profil-info-per.component.html',
  styleUrls: ['./coach-profil-info-per.component.css']
})
export class CoachProfilInfoPerComponent {
  user: any;
  constructor(private auth: AuthService) {}
  ngOnInit() {
    this.auth.verify().subscribe((data) => {
      console.log(data);
      this.user = data;
    });
  }
}

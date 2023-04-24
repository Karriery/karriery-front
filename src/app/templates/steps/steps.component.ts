import { Component } from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
})
export class StepsComponent {
  list: any = [
    {
      srcImg: './../../../assets/checkHome.png',
      paragraph: 'Choisissez votre pack',
    },
    { srcImg: '../../assets/pay.png', paragraph: 'Payez en toute sécurité' },
    {
      srcImg: '../../assets/callendar.png',
      paragraph: 'Planifiez une session de call vidéo avec un expert',
    },
    {
      srcImg: '../../assets/success.png',
      paragraph: 'Améliorez votre expérience professionnelle',
    },
  ];
}

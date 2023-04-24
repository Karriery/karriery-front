import { Component } from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss'],
})
export class ProcessComponent {
  list: any = [
    {
      number: '1',
      color: 'black',
      title: 'Créer votre profil',
      paragraph:
        'Créez votre profil professionnel en quelques minutes et augmentez vos chances de décrocher le travail de vos rêves',
    },
    {
      number: '2',
      color: 'black',
      title: 'Importer votre CV',
      paragraph:
        "Ajoutez votre CV à votre profil pour offrir aux coachs une vue d'ensemble complète de votre expérience professionnelle.",
    },
    {
      number: '3',
      color: 'red',
      title: "Nos coachs s'occuperont de tout",
      paragraph:
        '  Nous vous offrons un service personnalisé et adapté à vos besoins pour vous aider à atteindre vos objectifs professionnels.',
    },
  ];
}

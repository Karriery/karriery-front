import { Component } from '@angular/core';

@Component({
  selector: 'app-card-services',
  templateUrl: './card-services.component.html',
  styleUrls: ['./card-services.component.scss'],
})
export class CardServicesComponent {
  list: any = [
    {
      title: 'Feedback sur le système de suivi des candidatures',
      paragraph:
        'Obtener un feedback sur votre manière de suivi des candidatures et bénéficier d’une optimisation de votre candidature.',
    },
    {
      title: 'CV rédigé de manière professionnelle',
      paragraph:
        'CV rédigé selon les normes et les attentes des recruteurs professionnels.',
    },
    {
      title: 'Remaniement de profil LinkedIn',
      paragraph:
        "Bénéficier d'un remaniement de votre profil LinkedIn, améliorer votre visibilité et votre attractivité aux yeux des employeurs potentiels.",
    },
    {
      title: 'Conseils pour postuler à des emplois',
      paragraph:
        "Reçevez des conseils pour postuler à des emplois, la manière de personnaliser votre CV et vos lettres de motivation en fonction de chaque offre d'emploi.",
    },
  ];
}

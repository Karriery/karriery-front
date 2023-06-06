import { CoachProfiListeFeedbacksComponent } from './templates/coach-profi-liste-feedbacks/coach-profi-liste-feedbacks.component';
import { CoachProfiFeedbackComponent } from './templates/coach-profi-feedback/coach-profi-feedback.component';
import { CoachProfilTransactionsComponent } from './templates/coach-profil-transactions/coach-profil-transactions.component';
import { CoachProfilDashbordComponent } from './templates/coach-profil-dashbord/coach-profil-dashbord.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReadMeComponent } from "./pages/read-me/read-me.component";
import { HomeComponent } from "./pages/home/home.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { FormComponent } from "./pages/form/form.component";
import { PaymentComponent } from "./pages/payment/payment.component";
import { CreateUserComponent } from "./pages/create-user/create-user.component";
import { CreateUserPersonalInformationComponent } from "./templates/create-user-personal-information/create-user-personal-information.component";
import { CreateUserCareeInformationComponent } from "./templates/create-user-caree-information/create-user-caree-information.component";
import { CreateUserSuccessComponent } from "./templates/create-user-success/create-user-success.component";
import { CreateUserConfirmationPackComponent } from "./templates/create-user-confirmation-pack/create-user-confirmation-pack.component";
import { CreateUserChoicePaymentComponent } from "./templates/create-user-choice-payment/create-user-choice-payment.component";
import { CreateUserPaymentVersementComponent } from "./templates/create-user-payment-versement/create-user-payment-versement.component";
import { CreateUserPaymentCashComponent } from "./templates/create-user-payment-cash/create-user-payment-cash.component";
import { VerificationPaymentComponent } from "./templates/verification-payment/verification-payment.component";
import { UserProfilComponent } from "./pages/user-profil/user-profil.component";
import { UserDashboardComponent } from "./templates/user-dashboard/user-dashboard.component";
import { UserProfilInfoPerComponent } from "./templates/user-profil-info-per/user-profil-info-per.component";
import { UserProfilReunionComponent } from "./templates/user-profil-reunion/user-profil-reunion.component";
import { UserProfilCommandesComponent } from "./templates/user-profil-commandes/user-profil-commandes.component";
import { UserProfilFeedbackCoachComponent } from "./templates/user-profil-feedback-coach/user-profil-feedback-coach.component";
import { CoachProfilComponent } from "./pages/coach-profil/coach-profil.component";
import { CoachProfilInfoPerComponent } from './templates/coach-profil-info-per/coach-profil-info-per.component';
import { CoachProfiArchiveComponent } from './templates/coach-profi-archive/coach-profi-archive.component';
import { CoachProfiReunionComponent } from './templates/coach-profi-reunion/coach-profi-reunion.component';
import { CoachProfiListeCvComponent } from './templates/coach-profi-liste-cv/coach-profi-liste-cv.component';
import { CoachProfiAjouterCandidatsComponent } from './templates/coach-profi-ajouter-candidats/coach-profi-ajouter-candidats.component';
import { CoachProfiOptimisationsCVComponent } from './templates/coach-profi-optimisations-cv/coach-profi-optimisations-cv.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "readme", component: ReadMeComponent },
  { path: "form", component: FormComponent },
  { path: "payment", component: PaymentComponent },
  {
    path: "userProfil",
    component: UserProfilComponent,
    children: [
      { path: "userDashbord", component: UserDashboardComponent },
      { path: "infoPerso", component: UserProfilInfoPerComponent },
      { path: "Reunion", component: UserProfilReunionComponent },
      { path: "Commandes", component: UserProfilCommandesComponent },
      { path: "FeedbackCoach", component: UserProfilFeedbackCoachComponent },
    ],
  },
  {
    path: "ProfilCoach",
    component: CoachProfilComponent,
    children: [
      { path: "CoachDashbord", component: CoachProfilDashbordComponent },
      { path: "infoPerso", component:CoachProfilInfoPerComponent },
      { path: "transactions", component:CoachProfilTransactionsComponent },
      { path: "Archive", component:CoachProfiArchiveComponent },
      { path: "feedback", component:CoachProfiFeedbackComponent },
      { path: "reunion", component:CoachProfiReunionComponent},
      { path: "listeFeedbacks", component:CoachProfiListeFeedbacksComponent },
      { path: "listeCV", component:CoachProfiListeCvComponent },
      { path: "AjouterCandidats", component:CoachProfiAjouterCandidatsComponent },
      { path: "optimisationsCV", component: CoachProfiOptimisationsCVComponent },
     
    ],
  },
  {
    path: "createUser",
    component: CreateUserComponent,
    children: [
      { path: "Caree", component: CreateUserCareeInformationComponent },
      {
        path: "Personal",
        component: CreateUserPersonalInformationComponent,
      },
      {
        path: "ConfirmationPack",
        component: CreateUserConfirmationPackComponent,
      },
      {
        path: "ChoicePayment",
        component: CreateUserChoicePaymentComponent,
      },
      { path: "PaymentCash", component: CreateUserPaymentCashComponent },
      {
        path: "PaymentVersement",
        component: CreateUserPaymentVersementComponent,
      },
      {
        path: "VerificationPayment",
        component: VerificationPaymentComponent,
      },
      {
        path: "Success",
        component: CreateUserSuccessComponent,
      },
    ],
  },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

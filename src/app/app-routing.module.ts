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

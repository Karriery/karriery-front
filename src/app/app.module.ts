import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FooterComponent } from "./shared/footer/footer.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";
import { NgTiltModule } from "@geometricpanda/angular-tilt";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ReadMeComponent } from "./pages/read-me/read-me.component";
import { HttpClientModule } from "@angular/common/http";
import { MatButtonModule } from "@angular/material/button";
import { ButtonReadMeComponent } from "./shared/button-read-me/button-read-me.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { HomeComponent } from "./pages/home/home.component";
import { HeaderComponent } from "./templates/header/header.component";
import { ProcessComponent } from "./templates/process/process.component";
import { ServicesComponent } from "./templates/services/services.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { AboutComponent } from "./templates/about/about.component";
import { PricingComponent } from "./templates/pricing/pricing.component";
import { ContactComponent } from "./templates/contact/contact.component";
import { CardServicesComponent } from "./shared/card-services/card-services.component";
import { StepsComponent } from "./templates/steps/steps.component";
import { PackEvolutionComponent } from "./shared/pack-evolution/pack-evolution.component";
import { PackGrowthComponent } from "./shared/pack-growth/pack-growth.component";
import { PackExecutiveComponent } from "./shared/pack-executive/pack-executive.component";
import { ProcessStepComponent } from "./shared/process-step/process-step.component";
import { FormComponent } from "./pages/form/form.component";
import { AngularFireModule } from "@angular/fire";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { environment } from "src/environments/environment";
import { SpinnerComponent } from "./templates/spinner/spinner.component";
import { PaymentComponent } from "./pages/payment/payment.component";
import { DialogComponent } from "././templates/dialog/dialog.component";
import { InputComponent } from "./shared/input/input.component";
import { MatInputModule } from "@angular/material/input";
import { CreateUserComponent } from "./pages/create-user/create-user.component";
import { FormCareeInformationComponent } from "./shared/form-caree-information/form-caree-information.component";
import { FormPackageConfirmationComponent } from "./shared/form-package-confirmation/form-package-confirmation.component";
import { CardKarrieryComponent } from "./shared/card-karriery/card-karriery.component";
import { CreateUserCardUser1Component } from "./shared/create-user-card-user1/create-user-card-user1.component";
import { CreateUserCardUser2Component } from "./shared/create-user-card-user2/create-user-card-user2.component";
import { CreateUserPersonalInformationComponent } from "./templates/create-user-personal-information/create-user-personal-information.component";
import { CreateUserCareeInformationComponent } from "./templates/create-user-caree-information/create-user-caree-information.component";
import { CardProfilRedComponent } from "./shared/card-profil-red/card-profil-red.component";
import { CreateUserSuccessComponent } from './templates/create-user-success/create-user-success.component';
import { CreateUserConfirmationPackComponent } from './templates/create-user-confirmation-pack/create-user-confirmation-pack.component';
import { CreateUserChoicePaymentComponent } from './templates/create-user-choice-payment/create-user-choice-payment.component';
import { CreateUserPaymentCashComponent } from './templates/create-user-payment-cash/create-user-payment-cash.component';
import { CreateUserPaymentVersementComponent } from './templates/create-user-payment-versement/create-user-payment-versement.component';
import { VerificationPaymentComponent } from './templates/verification-payment/verification-payment.component';
import { UserProfilComponent } from './pages/user-profil/user-profil.component';
import { UserDashboardComponent } from './templates/user-dashboard/user-dashboard.component';
import { UserProfilInfoPerComponent } from './templates/user-profil-info-per/user-profil-info-per.component';
import { UserProfilReunionComponent } from './templates/user-profil-reunion/user-profil-reunion.component';
import { UserProfilCommandesComponent } from './templates/user-profil-commandes/user-profil-commandes.component';
import { UserProfilFeedbackCoachComponent } from './templates/user-profil-feedback-coach/user-profil-feedback-coach.component';
import { CoachProfilComponent } from './pages/coach-profil/coach-profil.component';
import { CoachProfilDashbordComponent } from './templates/coach-profil-dashbord/coach-profil-dashbord.component';
import { CoachProfilInfoPerComponent } from './templates/coach-profil-info-per/coach-profil-info-per.component';
import { CoachProfilTransactionsComponent } from './templates/coach-profil-transactions/coach-profil-transactions.component';
import { CoachProfiArchiveComponent } from './templates/coach-profi-archive/coach-profi-archive.component';
import { CoachProfiFeedbackComponent } from './templates/coach-profi-feedback/coach-profi-feedback.component';
import { CoachProfiReunionComponent } from './templates/coach-profi-reunion/coach-profi-reunion.component';
import { CoachProfiListeFeedbacksComponent } from './templates/coach-profi-liste-feedbacks/coach-profi-liste-feedbacks.component';
import { CoachProfiListeCvComponent } from './templates/coach-profi-liste-cv/coach-profi-liste-cv.component';
import { CoachProfiAjouterCandidatsComponent } from './templates/coach-profi-ajouter-candidats/coach-profi-ajouter-candidats.component';
import { CoachProfiOptimisationsCVComponent } from './templates/coach-profi-optimisations-cv/coach-profi-optimisations-cv.component';
import { AdminProfilComponent } from './pages/admin-profil/admin-profil.component';
import { AdminDashbordComponent } from './templates/admin-dashbord/admin-dashbord.component';
import { AdminInfoPerComponent } from './templates/admin-info-per/admin-info-per.component';
import { AdminListeComponent } from './templates/admin-liste/admin-liste.component';
import { CreateCoachComponent } from './pages/create-coach/create-coach.component';
import { CreateCoachCareeInformationComponent } from './templates/create-coach-caree-information/create-coach-caree-information.component';
import { CreateCoachSuccessComponent } from './templates/create-coach-success/create-coach-success.component';
import { CreateCoachVerifComponent } from './templates/create-coach-verif/create-coach-verif.component';
import { CreateCoachPersonalInformationComponent } from './templates/create-coach-personal-information/create-coach-personal-information.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadMeComponent,
    FooterComponent,
    ButtonReadMeComponent,
    NavbarComponent,
    HomeComponent,
    HeaderComponent,
    ProcessComponent,
    ServicesComponent,
    NotFoundComponent,
    AboutComponent,
    PricingComponent,
    ContactComponent,
    CardServicesComponent,
    StepsComponent,
    PackEvolutionComponent,
    PackGrowthComponent,
    PackExecutiveComponent,
    ProcessStepComponent,
    FormComponent,
    SpinnerComponent,
    PaymentComponent,
    DialogComponent,
    InputComponent,
    CreateUserComponent,
    FormCareeInformationComponent,
    FormPackageConfirmationComponent,
    CardKarrieryComponent,
    CreateUserCardUser1Component,
    CreateUserCardUser2Component,
    CreateUserPersonalInformationComponent,
    CreateUserCareeInformationComponent,
    CardProfilRedComponent,
    CreateUserSuccessComponent,
    CreateUserConfirmationPackComponent,
    CreateUserChoicePaymentComponent,
    CreateUserPaymentCashComponent,
    CreateUserPaymentVersementComponent,
    VerificationPaymentComponent,
    UserProfilComponent,
    UserDashboardComponent,
    UserProfilInfoPerComponent,
    UserProfilReunionComponent,
    UserProfilCommandesComponent,
    UserProfilFeedbackCoachComponent,
    CoachProfilComponent,
    CoachProfilDashbordComponent,
    CoachProfilInfoPerComponent,
    CoachProfilTransactionsComponent,
    CoachProfiArchiveComponent,
    CoachProfiFeedbackComponent,
    CoachProfiReunionComponent,
    CoachProfiListeFeedbacksComponent,
    CoachProfiListeCvComponent,
    CoachProfiAjouterCandidatsComponent,
    CoachProfiOptimisationsCVComponent,
    AdminProfilComponent,
    AdminDashbordComponent,
    AdminInfoPerComponent,
    AdminListeComponent,
    CreateCoachComponent,
    CreateCoachCareeInformationComponent,
    CreateCoachSuccessComponent,
    CreateCoachVerifComponent,
    CreateCoachPersonalInformationComponent,
  ],
  imports: [
    BrowserModule,
    NgTiltModule,
    AppRoutingModule,
    MatDialogModule,
    MatIconModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

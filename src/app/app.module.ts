import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FooterComponent } from "./shared/footer/footer.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";
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
import { NavbarCreateUserComponent } from "./shared/navbar-create-user/navbar-create-user.component";
import { FormPersonalInformationComponent } from "./shared/form-personal-information/form-personal-information.component";
import { FormCareeInformationComponent } from "./shared/form-caree-information/form-caree-information.component";
import { FormPackageConfirmationComponent } from "./shared/form-package-confirmation/form-package-confirmation.component";
import { PaymentChoiceComponent } from "./shared/payment-choice/payment-choice.component";
import { CardKarrieryComponent } from "./shared/card-karriery/card-karriery.component";
import { CreateUserCardUser1Component } from "./shared/create-user-card-user1/create-user-card-user1.component";
import { CreateUserCardUser2Component } from "./shared/create-user-card-user2/create-user-card-user2.component";
import { CreateUserPersonalInformationComponent } from "./templates/create-user-personal-information/create-user-personal-information.component";
import { CreateUserCareeInformationComponent } from "./templates/create-user-caree-information/create-user-caree-information.component";
import { CreateUserPaymentChoiceComponent } from "./templates/create-user-payment-choice/create-user-payment-choice.component";
import { CreateUserPackageConfirmationComponent } from "./templates/create-user-package-confirmation/create-user-package-confirmation.component";
import { CardProfilRedComponent } from "./shared/card-profil-red/card-profil-red.component";
import { PaiementParVersementComponent } from "./templates/paiement-par-versement/paiement-par-versement.component";
import { PaiementParCashComponent } from './templates/paiement-par-cash/paiement-par-cash.component';

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
    NavbarCreateUserComponent,
    FormPersonalInformationComponent,
    FormCareeInformationComponent,
    FormPackageConfirmationComponent,
    PaymentChoiceComponent,
    CardKarrieryComponent,
    CreateUserCardUser1Component,
    CreateUserCardUser2Component,
    CreateUserPersonalInformationComponent,
    CreateUserCareeInformationComponent,
    CreateUserPaymentChoiceComponent,
    CreateUserPackageConfirmationComponent,
    CardProfilRedComponent,
    PaiementParVersementComponent,
    PaiementParCashComponent,
  ],
  imports: [
    BrowserModule,
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

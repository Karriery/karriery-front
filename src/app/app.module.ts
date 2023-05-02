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

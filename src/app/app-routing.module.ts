import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReadMeComponent } from "./pages/read-me/read-me.component";
import { HomeComponent } from "./pages/home/home.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { FormComponent } from "./pages/form/form.component";
import { PaymentComponent } from "./pages/payment/payment.component";
import { CreateUserComponent } from "./pages/create-user/create-user.component";
import { FormCareeInformationComponent } from "./shared/form-caree-information/form-caree-information.component";
import { FormPersonalInformationComponent } from "./shared/form-personal-information/form-personal-information.component";
import { CreateUserPersonalInformationComponent } from "./templates/create-user-personal-information/create-user-personal-information.component";
import { CreateUserCareeInformationComponent } from "./templates/create-user-caree-information/create-user-caree-information.component";
import { CreateUserPaymentChoiceComponent } from "./templates/create-user-payment-choice/create-user-payment-choice.component";
import { PaiementParVersementComponent } from "./templates/paiement-par-versement/paiement-par-versement.component";
import { PaiementParCashComponent } from "./templates/paiement-par-cash/paiement-par-cash.component";
import { CreateUserPackageConfirmationComponent } from "./templates/create-user-package-confirmation/create-user-package-confirmation.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "readme", component: ReadMeComponent },
  { path: "form", component: FormComponent },
  { path: "payment", component: PaymentComponent },

  {
    path: "createUser",
    component: CreateUserComponent,
    children: [
      { path: "Caree", component: CreateUserCareeInformationComponent },
      {
        path: "packageConfirmation",
        component: CreateUserPackageConfirmationComponent,
      },
      {
        path: "pay",
        component: CreateUserPaymentChoiceComponent,
      },
      { path: "payVer", component: PaiementParVersementComponent },
      { path: "payCash", component: PaiementParCashComponent },
      {
        path: "Personal",
        component: CreateUserPersonalInformationComponent,
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

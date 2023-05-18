import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReadMeComponent } from "./pages/read-me/read-me.component";
import { HomeComponent } from "./pages/home/home.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { FormComponent } from "./pages/form/form.component";
import { PaymentComponent } from "./pages/payment/payment.component";
import { CreateUserComponent } from "./pages/create-user/create-user.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "readme", component: ReadMeComponent },
  { path: "form", component: FormComponent },
  { path: "payment", component: PaymentComponent },
  { path: "createUser", component: CreateUserComponent },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

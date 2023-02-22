import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyComponent } from './components/currency/currency.component';

const routes: Routes = [
  {path: "", pathMatch: "full", component:CurrencyComponent},
  {path: "currencies", component: CurrencyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

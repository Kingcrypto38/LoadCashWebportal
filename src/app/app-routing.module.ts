import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashComponent } from './Components/cash/cash.component';

const routes: Routes = [
 { path:"cash", component: CashComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

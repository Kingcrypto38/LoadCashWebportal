import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashComponent } from './Components/cash/cash.component';
import { UploadComponent } from './Components/upload/upload.component';

const routes: Routes = [
 { path:"cash", component: CashComponent },
 { path:"upload", component: UploadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

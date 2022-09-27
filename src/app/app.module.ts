import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UploadComponent } from './Components/upload/upload.component';
import { OutstandingBalanceComponent } from './Components/outstanding-balance/outstanding-balance.component';
import { TopNavComponent } from './Components/top-nav/top-nav.component';
import { SideNavComponent } from './Components/side-nav/side-nav.component';
import { ModalComponent } from './Components/modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CashComponent } from './Components/cash/cash.component';

@NgModule({
  declarations: [
    AppComponent,
    CashComponent,
    UploadComponent,
    OutstandingBalanceComponent,
    TopNavComponent,
    SideNavComponent,
    ModalComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule 
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

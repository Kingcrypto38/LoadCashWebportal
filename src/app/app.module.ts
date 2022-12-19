import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';


import { UploadComponent } from './Components/upload/upload.component';
import { OutstandingBalanceComponent } from './Components/outstanding-balance/outstanding-balance.component';
import { TopNavComponent } from './Components/top-nav/top-nav.component';
import { SideNavComponent } from './Components/side-nav/side-nav.component';
import { ModalComponent } from './Components/modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CashComponent } from './Components/cash/cash.component';
import { CustomerSelectComponent } from './Components/customer-select/customer-select.component';
import { GlobalCacheInterceptor } from './Cache/global-cache.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    CashComponent,
    UploadComponent,
    OutstandingBalanceComponent,
    TopNavComponent,
    SideNavComponent,
    ModalComponent,
    CustomerSelectComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule
   
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: GlobalCacheInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
